// ─── SHARED STATE ───
let spotifyController = null;
let openLPBrowser  = () => {};
let closeLPBrowser = () => {};
let loadAlbum      = () => {};
let albumList      = [];
let currentAlbumIdx = -1;

// ─── SPOTIFY IFRAME API ───
// Must be defined before the async Spotify script fires
window.onSpotifyIframeApiReady = function(IFrameAPI) {
  const el = document.getElementById('md-spotify-embed');
  if (!el) return;
  IFrameAPI.createController(el, {
    uri: 'spotify:artist:109FvbnDVNag1UcJDVpFlr',
    width: '100%',
    height: '380',
  }, function(controller) {
    spotifyController = controller;
  });
};

// ─── CLOCK (IP geolocation → visitor's local time) ───
function initClock() {
  let clockTz   = 'America/Los_Angeles';
  let clockCity = 'LOS ANGELES';

  function updateDisplay() {
    const now  = new Date();
    const opts = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: clockTz };
    const str  = now.toLocaleTimeString('en-US', opts).toUpperCase();
    const el   = document.getElementById('hdr-clock');
    if (el) el.textContent = `${str} / ${clockCity}`;
  }

  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      if (data.timezone) {
        clockTz   = data.timezone;
        clockCity = (data.city || data.region || 'LOCAL').toUpperCase().replace(/,.*/, '');
      }
      updateDisplay();
    })
    .catch(() => updateDisplay());

  updateDisplay();
  setInterval(updateDisplay, 1000);
}

// ─── LIGHT / DARK MODE ───
function initModeButtons() {
  const btnLight = document.getElementById('btn-light');
  const btnDark  = document.getElementById('btn-dark');
  if (!btnLight || !btnDark) return;

  const saved = localStorage.getItem('bt-mode') || 'light';
  setMode(saved);

  btnLight.addEventListener('click', () => setMode('light'));
  btnDark.addEventListener('click',  () => setMode('dark'));

  function setMode(mode) {
    document.documentElement.className = mode;
    btnLight.classList.toggle('active', mode === 'light');
    btnDark.classList.toggle('active',  mode === 'dark');
    localStorage.setItem('bt-mode', mode);
  }
}

// ─── FULLSCREEN ───
function initFullscreen() {
  const btn = document.getElementById('btn-fullscreen');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });
}

// ─── LIGHTBOX ───
function openLightbox(videoId) {
  document.getElementById('lightbox-iframe').src =
    `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;
  document.getElementById('lightbox').classList.add('open');
  // Pause Lenis smooth scroll if on the home page
  if (typeof lenisInstance !== 'undefined' && lenisInstance) {
    lenisInstance.stop();
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox-iframe').src = '';
  if (typeof lenisInstance !== 'undefined' && lenisInstance) {
    lenisInstance.start();
    document.body.style.overflow = '';
  }
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
  });
}

// ─── MINIDISC PLAYER ───
function initMiniDisc() {
  const player     = document.getElementById('md-player');
  const panel      = document.getElementById('md-panel');
  const disc       = document.getElementById('md-disc');
  const playBtn    = document.getElementById('md-play-btn');
  const minidisc   = document.getElementById('minidisc');
  const handle     = document.getElementById('md-handle');
  const restoreTab = document.getElementById('md-restore-tab');
  if (!player) return;

  let isOpen      = false;
  let isPlaying   = false;
  let isMinimized = false;

  function setOpen(open) {
    isOpen = open;
    panel.classList.toggle('open', open);
  }

  function setMinimized(min) {
    isMinimized = min;
    minidisc.classList.toggle('minimized', min);
    if (restoreTab) restoreTab.classList.toggle('visible', min);
  }

  function setPlaying(playing) {
    isPlaying = playing;
    disc.classList.toggle('spinning', playing);
    playBtn.innerHTML = playing ? '&#9646;&#9646;' : '&#9654;';
    if (spotifyController) {
      try { playing ? spotifyController.play() : spotifyController.pause(); } catch(e) {}
    }
  }

  // Load an album URI into the player
  loadAlbum = function(uri, title) {
    if (spotifyController) {
      try { spotifyController.loadUri('spotify:' + uri); } catch(e) {}
    }
    const displayText = document.getElementById('md-display-text');
    if (displayText) {
      displayText.textContent = title.toUpperCase() + ' \u25c6 BRIAN TYLER \u25c6\u00a0\u00a0';
    }
    if (isMinimized) setMinimized(false);
    if (!isOpen) setOpen(true);
    setPlaying(true);
  };

  // Disc click → open LP browser
  disc.addEventListener('click', e => {
    e.stopPropagation();
    openLPBrowser();
  });

  // Fan disc clicks also open LP browser
  document.querySelectorAll('.md-fan-disc').forEach(fd => {
    fd.addEventListener('click', e => {
      e.stopPropagation();
      openLPBrowser();
    });
  });

  // Drag handle — click to minimize
  if (handle) {
    handle.addEventListener('click', e => {
      e.stopPropagation();
      setMinimized(true);
    });
  }

  // Restore tab — click to bring back
  if (restoreTab) {
    restoreTab.addEventListener('click', () => setMinimized(false));
  }

  // Play/pause — opens panel on first play, restores if minimized
  playBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (isMinimized) setMinimized(false);
    if (!isPlaying) {
      if (!isOpen) setOpen(true);
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  });

  // ↓ close button — hides panel, keeps playing
  document.getElementById('md-panel-close').addEventListener('click', e => {
    e.stopPropagation();
    setOpen(false);
  });

  // Click player body to toggle panel (skip handle + disc area)
  player.addEventListener('click', e => {
    if (e.target.closest('.md-btn') || e.target.closest('a') ||
        e.target.closest('.md-handle') || e.target.closest('.md-disc-area')) return;
    if (isMinimized) { setMinimized(false); return; }
    setOpen(!isOpen);
  });

  // Prev/next cycle through the curated album crate
  document.getElementById('md-prev-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (!albumList.length) return;
    currentAlbumIdx = (currentAlbumIdx <= 0 ? albumList.length : currentAlbumIdx) - 1;
    const a = albumList[currentAlbumIdx];
    loadAlbum(a.spotifyUri, a.title);
    // Mark active in LP browser if open
    document.querySelectorAll('.lp-record').forEach((r, i) => r.classList.toggle('playing', i === currentAlbumIdx));
  });
  document.getElementById('md-next-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (!albumList.length) return;
    currentAlbumIdx = (currentAlbumIdx + 1) % albumList.length;
    const a = albumList[currentAlbumIdx];
    loadAlbum(a.spotifyUri, a.title);
    document.querySelectorAll('.lp-record').forEach((r, i) => r.classList.toggle('playing', i === currentAlbumIdx));
  });
}

// ─── LP BROWSER ───
function initLPBrowser() {
  const browser  = document.getElementById('lp-browser');
  const grid     = document.getElementById('lp-grid');
  const closeBtn = document.getElementById('lp-close-btn');
  if (!browser || !grid) return;

  // Gather entries with album URIs
  const albums = [];
  if (typeof FILMS    !== 'undefined') FILMS.forEach(f => { if (f.spotifyUri && f.spotifyUri.startsWith('album:')) albums.push(f); });
  if (typeof TV_SHOWS !== 'undefined') TV_SHOWS.forEach(s => { if (s.spotifyUri && s.spotifyUri.startsWith('album:')) albums.push(s); });

  // Expose album list globally for prev/next cycling
  albumList = albums;

  // Build LP records
  albums.forEach((entry, idx) => {
    const record = document.createElement('div');
    record.className = 'lp-record';
    const imgUrl = entry.cards && entry.cards[0] ? entry.cards[0].img : '';
    record.innerHTML = `
      <div class="lp-vinyl">
        <div class="lp-label" style="background-image:url('${imgUrl}')">
          <div class="lp-label-hole"></div>
        </div>
      </div>
      <div class="lp-record-title">${entry.title}</div>
      <div class="lp-record-year">${entry.year}</div>
    `;
    record.addEventListener('click', () => {
      document.querySelectorAll('.lp-record').forEach(r => r.classList.remove('playing'));
      record.classList.add('playing');
      currentAlbumIdx = idx;
      loadAlbum(entry.spotifyUri, entry.title);
      closeLPBrowser();
    });
    grid.appendChild(record);
  });

  // Wire open / close
  openLPBrowser = function() {
    browser.classList.add('open');
    browser.removeAttribute('aria-hidden');
    if (typeof lenisInstance !== 'undefined' && lenisInstance) lenisInstance.stop();
  };

  closeLPBrowser = function() {
    browser.classList.remove('open');
    browser.setAttribute('aria-hidden', 'true');
    if (typeof lenisInstance !== 'undefined' && lenisInstance) lenisInstance.start();
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLPBrowser);

  browser.addEventListener('click', e => { if (e.target === browser) closeLPBrowser(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && browser.classList.contains('open')) closeLPBrowser();
  });
}
