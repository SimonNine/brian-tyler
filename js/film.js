// ─── FILM PAGE INIT ───
// Runs after the loader completes (called by the loader in film.html)

function initFilmPage() {
  const params  = new URLSearchParams(window.location.search);
  const filmId  = params.get('id');
  const filmIdx = FILMS.findIndex(f => f.id === filmId);

  // Unknown id → home
  if (filmIdx === -1) {
    window.location.href = 'index.html';
    return;
  }

  const film = FILMS[filmIdx];

  // Page title
  document.title = `${film.title} — Brian Tyler`;

  // Left image
  const img = document.getElementById('fp-img');
  img.src = film.overlayImg;
  img.style.objectPosition = film.cards[0].pos;

  // Right panel — text content
  document.getElementById('fp-title').textContent       = film.displayTitle;
  document.getElementById('fp-meta-film').textContent   = film.title;
  document.getElementById('fp-meta-year').textContent   = film.year;
  document.getElementById('fp-meta-dir').textContent    = film.director;
  document.getElementById('fp-meta-studio').textContent = film.studio;
  document.getElementById('fp-desc').textContent        = film.description;

  // Track list
  const trackList = document.getElementById('fp-tracks');
  film.tracks.forEach((track, i) => {
    const li = document.createElement('li');
    li.className = 'fo-track-item';
    li.innerHTML = `<span class="fo-track-num">${String(i + 1).padStart(2, '0')}</span>${track}`;
    trackList.appendChild(li);
  });

  // Spotify embed — per-film album where available, artist fallback otherwise
  const spotifyIframe = document.getElementById('fp-spotify-iframe');
  if (spotifyIframe) {
    const uri  = film.spotifyUri || 'artist:109FvbnDVNag1UcJDVpFlr';
    const type = uri.startsWith('album') ? 'album' : 'artist';
    const id   = uri.replace(/^(album|artist):/, '');
    spotifyIframe.src = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=1`;
  }

  // Trailer button
  document.getElementById('fp-trailer-btn').addEventListener('click', () => {
    openLightbox(film.trailerVideoId);
  });

  // Counter
  document.getElementById('fp-counter').textContent =
    `${String(filmIdx + 1).padStart(2, '0')} / ${String(FILMS.length).padStart(2, '0')}`;

  // Prev / next links
  const prevFilm = FILMS[(filmIdx - 1 + FILMS.length) % FILMS.length];
  const nextFilm = FILMS[(filmIdx + 1) % FILMS.length];
  const prevEl   = document.getElementById('fp-prev');
  const nextEl   = document.getElementById('fp-next');

  prevEl.href        = `film.html?id=${prevFilm.id}`;
  prevEl.textContent = `← ${prevFilm.displayTitle}`;
  nextEl.href        = `film.html?id=${nextFilm.id}`;
  nextEl.textContent = `${nextFilm.displayTitle} →`;

  // Keyboard: ← → navigate films, Esc → back to work list
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  window.location.href = `film.html?id=${prevFilm.id}`;
    if (e.key === 'ArrowRight') window.location.href = `film.html?id=${nextFilm.id}`;
    if (e.key === 'Escape')     window.location.href = 'index.html#work';
  });

  // Scroll routing — Safari doesn't naturally wheel-scroll children of
  // position:fixed parents. Capture all wheel events and route to fp-right.
  initScrollRouting();
}

function initScrollRouting() {
  const right = document.getElementById('fp-right');
  if (!right) return;

  // Desktop: route all wheel events to the right panel
  window.addEventListener('wheel', function(e) {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('open')) return;

    e.preventDefault();

    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 32;
    if (e.deltaMode === 2) delta *= right.clientHeight;

    right.scrollTop += delta;
  }, { passive: false });

  // Mobile / trackpad touch: route touch on LEFT panel to scroll right panel
  const left = document.querySelector('.fo-left');
  if (left) {
    let touchStartY = 0;

    left.addEventListener('touchstart', function(e) {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    left.addEventListener('touchmove', function(e) {
      const lb = document.getElementById('lightbox');
      if (lb && lb.classList.contains('open')) return;

      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      right.scrollTop += delta;
      e.preventDefault();
    }, { passive: false });
  }
}
