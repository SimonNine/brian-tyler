// ─── HOME STATE ───
let lenisInstance    = null;
let lenisGeneration  = 0;
let currentSlideIdx  = 0;

// ─── GSAP SETUP ───
gsap.registerPlugin(ScrollTrigger);

// ─── LOADER / SPLASH ───
(function runLoader() {
  const loader   = document.getElementById('loader');
  const bar      = document.getElementById('loader-bar');
  const ll1      = document.getElementById('ll1');
  const ll2      = document.getElementById('ll2');
  const rule     = document.getElementById('loader-rule');
  const role     = document.getElementById('loader-role');
  const enterBtn = document.getElementById('loader-enter-btn');

  // Skip splash on returning visits (same browser session)
  if (sessionStorage.getItem('bt-visited')) {
    loader.style.display = 'none';
    initPage();
    return;
  }

  // Set initial off-screen state for word clips
  gsap.set(ll1, { y: '110%' });
  gsap.set(ll2, { y: '110%' });

  const tl = gsap.timeline({
    onComplete: () => {
      // After intro animation, show the Enter button (don't auto-dismiss)
      gsap.to(enterBtn, { opacity: 1, duration: 0.6, ease: 'power2.out' });
    }
  });

  tl
    .to(ll1,  { y: '0%',    duration: 0.75, ease: 'power3.out' })
    .to(ll2,  { y: '0%',    duration: 0.75, ease: 'power3.out' }, '-=0.55')
    .to(rule, { width: '180px', duration: 0.5, ease: 'power2.inOut' }, '-=0.2')
    .to(role, { opacity: 1, duration: 0.45, ease: 'power2.out' }, '-=0.2')
    .to(bar,  { width: '100%', duration: 0.7, ease: 'power2.inOut' }, '-=0.3');

  // Enter button click — dismiss splash and mark as visited
  enterBtn.addEventListener('click', () => {
    sessionStorage.setItem('bt-visited', '1');
    gsap.to(loader, {
      opacity: 0, duration: 0.55,
      onComplete: () => {
        loader.style.display = 'none';
        initPage();
      }
    });
  });
})();

// ─── INIT PAGE ───
function initPage() {
  initLenis();
  initCards();
  buildTicker();
  buildFilmsList();
  buildVideosGrid();
  initReveal();
  initClock();
  initModeButtons();
  initFullscreen();
  initMiniDisc();
  initLightbox();
  initNavLinks();
  initCta();
}

// ─── LENIS SMOOTH SCROLL ───
function initLenis() {
  if (lenisInstance) { lenisInstance.destroy(); lenisInstance = null; }
  lenisInstance = new Lenis({ lerp: 0.08, duration: 1.2 });
  const gen = ++lenisGeneration;
  function raf(time) {
    if (lenisGeneration !== gen) return; // discard zombie loops
    lenisInstance.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// ─── NAV SMOOTH SCROLL (intercepts same-page hash links for Lenis) ───
function initNavLinks() {
  document.querySelectorAll('.hdr-nav a').forEach(a => {
    a.addEventListener('click', e => {
      const url = new URL(a.href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault();
        lenisInstance && lenisInstance.scrollTo(url.hash);
      }
    });
  });
  // Logo click → scroll to top
  const logo = document.querySelector('.hdr-logo');
  if (logo) {
    logo.addEventListener('click', e => {
      e.preventDefault();
      lenisInstance && lenisInstance.scrollTo(0);
    });
  }
}

// ─── FAN CARDS ───
function initCards() {
  const slide = INTRO_SLIDE;
  ['hc1-img', 'hc2-img', 'hc3-img'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.src = slide.cards[i].img;
    el.style.objectPosition = slide.cards[i].pos;
  });

  const hc1    = document.getElementById('hc1');
  const hc2    = document.getElementById('hc2');
  const hc3    = document.getElementById('hc3');
  const spread = Math.min(Math.max(window.innerWidth * 0.13, 160), 230);

  gsap.set(hc1, { rotation: -14, x: -spread, transformOrigin: '50% 100%', opacity: 0, zIndex: 1 });
  gsap.set(hc2, { rotation: 0,   x: 0,       transformOrigin: '50% 100%', opacity: 0, zIndex: 2 });
  gsap.set(hc3, { rotation: 14,  x: spread,  transformOrigin: '50% 100%', opacity: 0, zIndex: 1 });

  gsap.timeline({ delay: 0.1 })
    .to(hc1, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    .to(hc2, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .to(hc3, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');

  // Scroll fan-out
  ScrollTrigger.create({
    trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1,
    onUpdate: self => {
      const p = self.progress;
      gsap.to(hc1, { rotation: -14 - p * 10, x: -spread - p * 40, duration: 0.1, overwrite: 'auto' });
      gsap.to(hc3, { rotation:  14 + p * 10, x:  spread + p * 40, duration: 0.1, overwrite: 'auto' });
      gsap.to(hc2, { y: p * 30,                                    duration: 0.1, overwrite: 'auto' });
    }
  });

  // Hover lift
  [hc1, hc2, hc3].forEach(card => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -12, scale: 1.03, duration: 0.3, overwrite: 'auto' }));
    card.addEventListener('mouseleave', () => gsap.to(card, { y: 0,   scale: 1,    duration: 0.35, overwrite: 'auto' }));
    card.addEventListener('click', () => {
      if (currentSlideIdx === 0) {
        lenisInstance && lenisInstance.scrollTo('#bio');
      } else {
        window.location.href = `film.html?id=${FILMS[currentSlideIdx - 1].id}`;
      }
    });
  });
}

// ─── SELECT SLIDE (ticker / prev-next changes the hero cards) ───
function selectSlide(idx) {
  if (idx < 0)             idx = FILMS.length;
  if (idx > FILMS.length)  idx = 0;
  currentSlideIdx = idx;

  const slide = idx === 0 ? INTRO_SLIDE : FILMS[idx - 1];

  ['hc1-img', 'hc2-img', 'hc3-img'].forEach((id, i) => {
    const el = document.getElementById(id);
    gsap.to(el, {
      opacity: 0, duration: 0.25,
      onComplete: () => {
        el.src = slide.cards[i].img;
        el.style.objectPosition = slide.cards[i].pos;
        gsap.to(el, { opacity: 1, duration: 0.35 });
      }
    });
  });

  const cardVideo = document.getElementById('hc2-video');
  if (cardVideo) cardVideo.classList.toggle('active', idx === 0);

  document.querySelectorAll('.ticker-item[data-idx]').forEach(item => {
    item.classList.toggle('active', parseInt(item.dataset.idx) === idx);
  });

  updateCta(idx);
}

// ─── TICKER ───
function buildTicker() {
  const inner    = document.getElementById('ticker-inner');
  const allItems = [
    { label: 'BRIAN TYLER', idx: 0 },
    ...FILMS.map((f, i) => ({ label: f.ticker, idx: i + 1 }))
  ];

  let html = '';
  for (let pass = 0; pass < 2; pass++) {
    allItems.forEach(item => {
      html += `<span class="ticker-item${item.idx === 0 ? ' active' : ''}" data-idx="${item.idx}">${item.label}</span>`;
      html += `<span class="ticker-div">◆</span>`;
    });
  }
  inner.innerHTML = html;

  inner.querySelectorAll('.ticker-item').forEach(el => {
    el.addEventListener('click', () => selectSlide(parseInt(el.dataset.idx)));
  });

  document.getElementById('ticker-prev').addEventListener('click', () => selectSlide(currentSlideIdx - 1));
  document.getElementById('ticker-next').addEventListener('click', () => selectSlide(currentSlideIdx + 1));
}

// ─── FILMS LIST ───
function buildFilmsList() {
  const list = document.getElementById('films-list');
  FILMS.forEach((film, i) => {
    const li = document.createElement('li');
    li.className = 'film-row reveal';
    const accoladesHtml = film.accolades && film.accolades.length
      ? `<span class="film-accolades">${film.accolades.map(a => `<span class="film-accolade">◆ ${a}</span>`).join('')}</span>`
      : '';
    li.innerHTML = `
      <span class="film-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="film-info">
        <span class="film-name">${film.title}</span>
        ${accoladesHtml}
      </div>
      <span class="film-year">${film.year}</span>
      <span class="film-arrow">→</span>
    `;
    li.addEventListener('click', () => {
      window.location.href = `film.html?id=${film.id}`;
    });
    list.appendChild(li);
  });
}

// ─── VIDEOS GRID ───
function buildVideosGrid() {
  const grid = document.getElementById('videos-grid');
  VIDEOS.forEach(v => {
    const tile = document.createElement('div');
    tile.className = 'video-tile';
    tile.innerHTML = `
      <img src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" alt="${v.title}" loading="lazy">
      <div class="video-tile-overlay">
        <div class="play-circle"></div>
        <span class="video-tile-title">${v.title}</span>
      </div>
    `;
    tile.addEventListener('click', () => openLightbox(v.id));
    grid.appendChild(tile);
  });
}

// ─── HERO CTA ───
function initCta() {
  document.getElementById('hero-cta-btn').addEventListener('click', () => {
    if (currentSlideIdx === 0) {
      lenisInstance && lenisInstance.scrollTo('#bio');
    } else {
      window.location.href = `film.html?id=${FILMS[currentSlideIdx - 1].id}`;
    }
  });
}

function updateCta(idx) {
  const btn  = document.getElementById('hero-cta-btn');
  const icon = btn.querySelector('.hero-cta-icon');
  const text = btn.querySelector('.hero-cta-text');
  if (!btn) return;

  // Re-trigger entry animation
  btn.classList.remove('animating');
  void btn.offsetWidth; // reflow to restart animation
  btn.classList.add('animating');

  if (idx === 0) {
    btn.classList.remove('cta-score');
    btn.classList.add('cta-discover');
    icon.textContent = '↓';
    text.textContent = 'Behind the Man';
    // Remove score arrow if present
    const arrow = btn.querySelector('.hero-cta-arrow');
    if (arrow) arrow.remove();
  } else {
    btn.classList.remove('cta-discover');
    btn.classList.add('cta-score');
    icon.textContent = '♪';
    text.textContent = 'Explore the Score';
    // Add arrow if not already there
    if (!btn.querySelector('.hero-cta-arrow')) {
      const arrow = document.createElement('span');
      arrow.className = 'hero-cta-arrow';
      arrow.textContent = '→';
      btn.appendChild(arrow);
    }
  }
}

// ─── REVEAL ON SCROLL ───
function initReveal() {
  gsap.utils.toArray('.reveal').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => el.classList.add('in-view')
    });
  });
}
