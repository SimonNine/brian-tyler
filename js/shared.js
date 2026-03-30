// ─── SHARED STATE ───
// spotifyController is set by the Spotify iframe API callback below
let spotifyController = null;

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

  // Click player body to toggle panel (skip handle clicks)
  player.addEventListener('click', e => {
    if (e.target.closest('.md-btn') || e.target.closest('a') || e.target.closest('.md-handle')) return;
    if (isMinimized) { setMinimized(false); return; }
    setOpen(!isOpen);
  });

  document.getElementById('md-prev-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (spotifyController) { try { spotifyController.previousTrack(); } catch(e) {} }
  });
  document.getElementById('md-next-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (spotifyController) { try { spotifyController.nextTrack(); } catch(e) {} }
  });
}
