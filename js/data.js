// ─── COMPOSER CONFIG ─────────────────────────────────────────────────────────
// To build a new composer's site: fork the repo, replace this block and the
// FILMS / TV_SHOWS / VIDEOS / INTRO_SLIDE arrays below. Nothing else changes.
// ─────────────────────────────────────────────────────────────────────────────
const COMPOSER = {
  nameFirst: 'BRIAN',
  nameLast: 'TYLER',
  nameDisplay: 'Brian Tyler',
  role: 'Film Composer · Conductor · Producer',
  bioVideoId: 'dogHOIdjefc',
  bioHeading: ['BRIAN', 'TYLER'],
  bioParas: [
    'Brian Tyler is one of the world’s most prolific and successful composers for film, television, and video games. With a filmography spanning blockbusters, intimate dramas, and landmark television, his music has generated over $14 billion at the global box office.',
    'His distinctive orchestral voice — combining the power of a 100-piece orchestra with intimate chamber textures — has become synonymous with some of Hollywood’s most beloved franchises.'
  ],
  email: 'info@briantyler.com',
  contactTagline: 'Composing for film, television & the screen since 1997',
  spotifyArtistUri: 'artist:109FvbnDVNag1UcJDVpFlr',
  spotifyBlurb: 'From thunderous Marvel battle cues to intimate Yellowstone character themes — Brian Tyler’s complete catalogue is available now on Spotify. Over 200 albums spanning three decades of cinematic work.',
  miniDiscTicker: 'BRIAN TYLER ◆ STREAM THE SCORE ◆  ',
  pressQuery: '"Brian Tyler" composer',
  curatedPress: [
    {
      source: 'Variety',
      pubDate: 'May 2022',
      link: 'https://variety.com/2022/music/news/brian-tyler-bmi-icon-film-tv-awards-1235264814/',
      title: 'Fast and Furious Composer Brian Tyler Named BMI Icon',
      description: 'Tyler receives BMI’s highest accolade at the 38th annual BMI Film, TV and Visual Media Awards, joining past honorees John Williams and Alan Silvestri.'
    },
    {
      source: 'Deadline',
      pubDate: 'May 2023',
      link: 'https://deadline.com/2023/05/yellowstone-1923-composers-brian-tyler-breton-vivian-interview-sound-and-screen-1235363285/',
      title: 'Yellowstone and 1923 Composers Brian Tyler and Breton Vivian Interview',
      description: 'Tyler and Breton Vivian discuss their respective scores for Taylor Sheridan’s Yellowstone universe at Deadline’s Sound & Screen event.'
    },
    {
      source: 'Deadline',
      pubDate: 'Nov 2023',
      link: 'https://deadline.com/2023/11/brian-tyler-the-super-mario-bros-movie-composer-animation-magazine-1235640169/',
      title: 'The Super Mario Bros. Movie Composer Brian Tyler',
      description: 'Tyler talks about scoring the blockbuster as a lifelong Mario fan, detailing how he wove iconic game music into a cinematic orchestral framework.'
    },
    {
      source: 'Variety',
      pubDate: 'Jun 2021',
      link: 'https://variety.com/2021/artisans/production/f9-composer-music-fast-franchise-1235003950/',
      title: 'F9 Composer Brian Tyler Says Character, Not Action, Drives the Music',
      description: 'Tyler explains his philosophy on scoring the Fast & Furious franchise — that despite the explosive action, emotional character journeys guide his musical choices.'
    },
    {
      source: 'Hollywood Reporter',
      pubDate: '2015',
      link: 'https://www.hollywoodreporter.com/news/general-news/brian-tyler-7bn-composer-furious-787636/',
      title: 'Brian Tyler, the $7BN Composer, on Furious 7 and Paul Walker',
      description: 'Tyler discusses scoring the emotionally charged Furious 7, including the tribute to Paul Walker who died during production, and the moment real life and film grief converged.'
    },
    {
      source: 'Pop Disciple',
      pubDate: 'Interview',
      link: 'https://www.popdisciple.com/interviews/brian-tyler',
      title: 'Brian Tyler — Composer of Crazy Rich Asians, Yellowstone, and the Formula One Theme',
      description: 'A career-spanning interview covering Crazy Rich Asians (Oscar shortlisted), the Yellowstone theme, and his approach to building music as standalone concert works.'
    }
  ],
  social: {
    instagram: 'https://instagram.com/briantylermusic',
    twitter: 'https://x.com/BrianTylerMusic',
    youtube: 'https://www.youtube.com/channel/UCDYcczgXCL1pdDQAxIofCXA',
    facebook: 'https://facebook.com/briantylermusic'
  },
  listInitialCount: 12,
  birthday: '05-08',
  copyrightYear: '2025'
};

// ─── FILM DATA ───
const FILMS = [
  {
    status: 'published',
    id: 'avengers',
    ticker: 'AVENGERS: AGE OF ULTRON',
    displayTitle: 'AVENGERS',
    title: 'Avengers: Age of Ultron',
    year: '2015',
    director: 'Joss Whedon',
    studio: 'Marvel Studios',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/kIBK5SKwgqIIuRKhhWrJn3XkbPq.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/9t6drsYN58jO9ZSRu8Gs5f2XgzQ.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/kIBK5SKwgqIIuRKhhWrJn3XkbPq.jpg',
    trailerVideoId: 'tmeOjFno6Do',
    spotifyUri: 'artist:109FvbnDVNag1UcJDVpFlr',
    tracks: [
      'Avengers: Age of Ultron (Main Theme)',
      'Heroes Assemble',
      'New Avengers',
      'Ultron Wakes',
      'The Iron Legion',
      'Hulk Smash',
      'The Enemy Among Us',
      'Seoul',
      'Capture and Escape',
      'No Strings on Me',
      'Lifting Mjolnir',
      'Sokovia',
      'Vision',
      'Age of Ultron (End Credits)'
    ],
    description: 'Tyler\'s thunderous brass and choir drove every battle cue with a soaring new Avengers theme — recorded at Capitol Studios and Abbey Road.',
    accolades: ['ASCAP Top Box Office Film']
  },
  {
    status: 'published',
    id: 'ironman3',
    ticker: 'IRON MAN 3',
    displayTitle: 'IRON MAN 3',
    title: 'Iron Man 3',
    year: '2013',
    director: 'Shane Black',
    studio: 'Marvel Studios',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/xZFRxfZKwEnvPpwq0RHdU8hmvqF.jpg', pos: '18% center' },
      { img: 'https://image.tmdb.org/t/p/w780/aFTYFqrWp4RS46Twm87l5e0ItYb.jpg', pos: 'center top' },
      { img: 'https://image.tmdb.org/t/p/w780/tKa1gmGKAUVYnflYcadipeL3d9h.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/xZFRxfZKwEnvPpwq0RHdU8hmvqF.jpg',
    trailerVideoId: '2CzoSeClcw0',
    spotifyUri: 'album:7x6etI9jQ2ePxZUOQaPrbi',
    tracks: [
      'Can You Dig It (Main Titles)',
      'Iron Man 3 (Main Theme)',
      'The Mechanic',
      'Heroes Fall',
      'Dis-Assembly',
      'Extremis',
      'Barrel of Monkeys',
      'The Vault',
      'House Party',
      'Back in Business',
      'Battle at the Mansion',
      'Fail-Safe',
      'Tony Stark Revealed',
      'Iron Man Returns'
    ],
    description: 'A bold 9-note horn motif recorded at Abbey Road Studios — blockbuster power meeting intimate character texture.',
    accolades: ['ASCAP Top Box Office Film']
  },
  {
    status: 'published',
    id: 'mario',
    ticker: 'THE SUPER MARIO BROS. MOVIE',
    displayTitle: 'MARIO',
    title: 'The Super Mario Bros. Movie',
    year: '2023',
    director: 'Aaron Horvath & Michael Jelenic',
    studio: 'Illumination / Nintendo',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg', pos: '25% center' },
      { img: 'https://image.tmdb.org/t/p/w780/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/dBkvawTlvciUvW7jmNAtuvhdtdr.jpg', pos: '70% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    trailerVideoId: 'TnGl01FkMMo',
    spotifyUri: 'album:3QITNyRzvTqn0t9tLmS1Vd',
    tracks: [
      'Super Mario Bros. Opus',
      'Welcome to the Mushroom Kingdom',
      'King of the Koopas',
      'It\'s-a Mario',
      'Bowser\'s Castle',
      'Rainbow Road',
      'Peach\'s Theme',
      'Into the Pipes',
      'Donkey Kong Battle',
      'Rainbow Road Race',
      'Final Battle',
      'Let\'s Go!',
      'Together (End Credits)'
    ],
    description: '98% original orchestral music woven with Koji Kondo\'s legendary game themes as Easter eggs throughout.',
    accolades: ['$1.36B Global Box Office']
  },
  {
    status: 'published',
    id: 'fastx',
    ticker: 'FAST X',
    displayTitle: 'FAST X',
    title: 'Fast X',
    year: '2023',
    director: 'Louis Leterrier',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/fSd5MjJNcauyEbHuzUdCE1TKttK.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/cSWkX0fTjrBCU2sbEmyRFd1SxPA.jpg', pos: 'center top' },
      { img: 'https://image.tmdb.org/t/p/w780/k8lWXLyC3r0Vd9wKNzlWvtJmogV.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/fSd5MjJNcauyEbHuzUdCE1TKttK.jpg',
    trailerVideoId: 'VVbIrBSlBvo',
    spotifyUri: 'album:7B5OEAhzMzCzNXjMWhH40R',
    tracks: [
      'Fast X Main Title',
      'Dante\'s Theme',
      'Family Forever',
      'Streets of Rome',
      'The Chase',
      'Full Throttle',
      'Into the Night',
      'No Way Back',
      'Dom\'s Theme',
      'Always Remember'
    ],
    description: 'Propulsive score introducing Dante\'s menacing theme — his seventh Fast & Furious instalment pushing the franchise\'s sonic identity to new extremes.',
    accolades: ['7th Fast & Furious Score']
  },
  {
    status: 'published',
    id: 'crazrich',
    ticker: 'CRAZY RICH ASIANS',
    displayTitle: 'CRAZY RICH',
    title: 'Crazy Rich Asians',
    year: '2018',
    director: 'Jon M. Chu',
    studio: 'Warner Bros.',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/7tTCnQcKzUkabDV3BJMe7LIzlEs.jpg', pos: '25% center' },
      { img: 'https://image.tmdb.org/t/p/w780/zeHB7aP46Xs3u4aFLuAq2GFeUGb.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/bb362waz16FQtnTgEGDtdnFTUGW.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/7tTCnQcKzUkabDV3BJMe7LIzlEs.jpg',
    trailerVideoId: 'ZQ-YX-5bAs0',
    spotifyUri: 'album:1jPitmIR2bDO8mV1qnHJhS',
    tracks: [
      'Crazy Rich Asians (Main Theme)',
      'Nick and Rachel',
      'Text Ting Swing',
      'Approaching the Palace',
      'The Gossip Circuit',
      'An Awkward Dinner',
      'Singapore Rain',
      'Love Theme',
      'Chess',
      'The Wedding',
      'Goodbye Singapore'
    ],
    description: 'Lush orchestral romance infused with jazz big band — 2019 Oscar shortlisted for Best Original Score.',
    accolades: ['Oscar Shortlisted — Best Original Score']
  },
  {
    status: 'published',
    id: 'yellowstone',
    ticker: 'YELLOWSTONE',
    displayTitle: 'YELLOWSTONE',
    title: 'Yellowstone',
    year: '2018–2024',
    director: 'Taylor Sheridan',
    studio: 'Paramount Network',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/ynSOcgDLZfdLCZfRSYZGiTgYJVo.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/hFFAYkK8XkvIlQss9GYxo8TOhFi.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/xHkOKPUe3ioXyPIe5odyL6o6cp4.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/ynSOcgDLZfdLCZfRSYZGiTgYJVo.jpg',
    trailerVideoId: 'suobrMPBLlo',
    spotifyUri: 'album:3B3SP3uBMl7n2UsJb5ZH7L',
    tracks: [
      'Yellowstone (Main Title)',
      'Vision Quest',
      'Cowboys Don\'t Say Goodbye',
      'The Dutton Ranch',
      'Open Range',
      'Rip\'s Code',
      'Beth',
      'Tate',
      'Wild Horses',
      'Montana Sky',
      'Season\'s End',
      'Legacy'
    ],
    description: 'Intimate orchestral Americana — cello, fiddle, charango — scored with the sweep of an epic and the intimacy of a character study.',
    accolades: ['Emmy Nom. — Outstanding Main Title Theme', 'Most Watched Cable Series']
  },
  {
    status: 'published',
    id: 'furious7',
    ticker: 'FURIOUS 7',
    displayTitle: 'FURIOUS 7',
    title: 'Furious 7',
    year: '2015',
    director: 'James Wan',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/bhXcS4m37eYwM85Avp7SWRmnrpn.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/e0eZZMrV7a9wLxKVTysCPtabZqd.jpg', pos: 'center top' },
      { img: 'https://image.tmdb.org/t/p/w780/5XZWFYxnyTTwM2LkjoT6zDkoRLb.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/bhXcS4m37eYwM85Avp7SWRmnrpn.jpg',
    trailerVideoId: 'yISKeT6sDOg',
    spotifyUri: 'album:61ZqPb9ZP5c72WgME7GvXJ',
    tracks: [
      'Furious 7 (Main Title)',
      'The Race is On',
      'God\'s Eye',
      'Brian\'s Theme',
      'Dubai Heist',
      'Ramsey',
      'Going Underground',
      'Deckard Shaw',
      'For Dom',
      'You Will Be Missed'
    ],
    description: 'Kinetic action cues and a deeply emotional farewell to Paul Walker — a score that captured a global audience\'s grief.',
    accolades: ['$1.52B Global Box Office', 'ASCAP Top Box Office Film']
  },
  {
    status: 'published',
    id: 'nuremberg',
    ticker: 'NUREMBERG',
    displayTitle: 'NUREMBERG',
    title: 'Nuremberg',
    year: '2025',
    director: 'James Vanderbilt',
    studio: 'Sony Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/bf5TG9RODkPXmtJSgf8Iymof1wl.jpg', pos: '25% center' },
      { img: 'https://image.tmdb.org/t/p/w780/ygj87qrAEYpAHftOYs4eS62ZK40.jpg', pos: 'center top' },
      { img: 'https://image.tmdb.org/t/p/w780/ajzEWXl1z75Mx6lOj9lToHt5t6Z.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/bf5TG9RODkPXmtJSgf8Iymof1wl.jpg',
    trailerVideoId: 'SW7FsQqsB2I',
    spotifyUri: 'album:21gTaB4VLkPHPk9dBPQb3Y',
    tracks: [
      'Nuremberg (Main Theme)',
      'The Tribunal Convenes',
      'Opening Arguments',
      'The Accused',
      'Witness to History',
      'Justice Rising',
      'The Prosecution',
      'Dark Testimony',
      'Confronting Evil',
      'Verdict',
      'The Weight of History',
      'Closing Theme'
    ],
    description: 'A 25-minute orchestral concerto incorporating actual Dachau alarm bell recordings — Tyler\'s most historically significant work.',
    accolades: ['Sony Classical Release']
  },
  {
    status: 'published',
    id: 'frailty',
    ticker: 'FRAILTY',
    displayTitle: 'FRAILTY',
    title: 'Frailty',
    year: '2001',
    director: 'Bill Paxton',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/2NI8J2dktpprOfXb65hsNQ5TNt6.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/hNAkoHuXFUsCHakxMlMsbaflKLN.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/uxWx25FBOvT4OS4HmFnMSJYbaj0.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/2NI8J2dktpprOfXb65hsNQ5TNt6.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s breakthrough score. Dark psychological thriller — tense, intimate orchestral writing that brought him to Hollywood\'s attention.',
    accolades: ['World Soundtrack Award Nom. 2002']
  },
  {
    status: 'published',
    id: 'thehunted',
    ticker: 'THE HUNTED',
    displayTitle: 'THE HUNTED',
    title: 'The Hunted',
    year: '2003',
    director: 'William Friedkin',
    studio: 'Paramount Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/2T3k09YnrM03CQd1yK3ZQLEHEZH.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/dQfBTEbOPmIK33DdfxNxZwqXWbw.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/5feoV4KrWKX1IBGl3XMXzJU7mDM.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/2T3k09YnrM03CQd1yK3ZQLEHEZH.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Friedkin approached Tyler directly after hearing Frailty. Intense orchestral and ambient sound design underlining psychological tension between hunter and hunted.',
    accolades: ['World Soundtrack Award — Best New Film Composer 2003']
  },
  {
    status: 'published',
    id: 'constantine',
    ticker: 'CONSTANTINE',
    displayTitle: 'CONSTANTINE',
    title: 'Constantine',
    year: '2005',
    director: 'Francis Lawrence',
    studio: 'Warner Bros. / DC Comics',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/z9qFZHT8K7tG2PlpKBSAqlmGST8.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/26OvB15pqk3eiKJG8LrXDVzO7Mw.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/x3YFn10ehQKMRIJwIfiDAX8S9Xt.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/z9qFZHT8K7tG2PlpKBSAqlmGST8.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Co-composed with Klaus Badelt — Tyler wrote the fully orchestral dark score and conducted the final combined score at Abbey Road.',
    accolades: ['ASCAP Film Award']
  },
  {
    status: 'published',
    id: 'tokyodrift',
    ticker: 'THE FAST AND THE FURIOUS: TOKYO DRIFT',
    displayTitle: 'TOKYO DRIFT',
    title: 'The Fast and the Furious: Tokyo Drift',
    year: '2006',
    director: 'Justin Lin',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/dMARcKLrv0T7kVJ4iQR3vqTTdtT.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/1GYKXTJaSQMeFxiSxU4WyB63RZN.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/iXeFc9HM0wLG5rHoYj09wwIQH7M.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/dMARcKLrv0T7kVJ4iQR3vqTTdtT.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s franchise entry point — established the orchestral foundation and driving thematic motifs the series would build on for nearly 20 years.',
    accolades: ['BMI Film & TV Award']
  },
  {
    status: 'published',
    id: 'war',
    ticker: 'WAR',
    displayTitle: 'WAR',
    title: 'War',
    year: '2007',
    director: 'Philip G. Atwell',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/b5IB4VGjR818tTNcCLHQCIFwQmW.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/n7vA2SiG8YQGOZt2WYzgNdHsfC3.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/g9YSXpAGOpkAFU30xfPdGSNHFxK.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/b5IB4VGjR818tTNcCLHQCIFwQmW.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler conducted the London Symphony Orchestra at Lyndhurst Studios for this Jet Li / Jason Statham action thriller.',
    accolades: []
  },
  {
    status: 'published',
    id: 'avprequiem',
    ticker: 'ALIENS VS. PREDATOR: REQUIEM',
    displayTitle: 'AVP: REQUIEM',
    title: 'Aliens vs. Predator: Requiem',
    year: '2007',
    director: 'The Brothers Strause',
    studio: '20th Century Fox',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/jXntuh47VtKLeoyBQ268rv24Igw.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/mgwRBxZ1FLEq2EaajlmFSW3frLN.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/seg5bqGDPfkmdT4RoF8dEr8EzeO.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/jXntuh47VtKLeoyBQ268rv24Igw.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Fully orchestral score referencing classic themes from the Alien and Predator franchises — performed by the Hollywood Studio Symphony.',
    accolades: []
  },
  {
    status: 'published',
    id: 'eagleeye',
    ticker: 'EAGLE EYE',
    displayTitle: 'EAGLE EYE',
    title: 'Eagle Eye',
    year: '2008',
    director: 'D.J. Caruso',
    studio: 'DreamWorks / Paramount',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/xQc51OBY9UNF2fQKyAOXZE7az2w.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/9OHtnvtxMpUtHdKj2TehlhY3xIO.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/j5YwXIxzaW9ZIvdBGqxVwq5bWFL.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/xQc51OBY9UNF2fQKyAOXZE7az2w.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: '88-piece orchestra at Sony Scoring Stage plus 140 pre-recorded elements including Moroccan percussion and taiko drums — propulsive kinetic thriller score.',
    accolades: []
  },
  {
    status: 'published',
    id: 'rambo',
    ticker: 'RAMBO',
    displayTitle: 'RAMBO',
    title: 'Rambo',
    year: '2008',
    director: 'Sylvester Stallone',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/wzfTG1obTazlGXiIcfRIviBZ1QU.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/8cX1Xt91RSpxpwNamNDQog0OeMq.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/5W0ljXTtLVuLF0z8GE7mNXgTC44.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/wzfTG1obTazlGXiIcfRIviBZ1QU.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler incorporated Jerry Goldsmith\'s original Rambo themes as homage — continuing Goldsmith\'s established vocabulary while adding his own new material.',
    accolades: []
  },
  {
    status: 'published',
    id: 'fastfurious4',
    ticker: 'FAST & FURIOUS',
    displayTitle: 'FAST & FURIOUS',
    title: 'Fast & Furious',
    year: '2009',
    director: 'Justin Lin',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/25HepicRtrzZ3MVCqhfoxGDbHjw.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/dyeAopJ2OdALNnEZj9ujGJGfYHp.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/9VqS5iOQMfQKPZiKxbGwEnzogTM.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/25HepicRtrzZ3MVCqhfoxGDbHjw.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'First full franchise entry where Tyler introduced core character themes — Letty\'s theme and Dom\'s theme — laying the emotional foundation for the entire saga.',
    accolades: []
  },
  {
    status: 'published',
    id: 'lawabidingcitizen',
    ticker: 'LAW ABIDING CITIZEN',
    displayTitle: 'LAW ABIDING CITIZEN',
    title: 'Law Abiding Citizen',
    year: '2009',
    director: 'F. Gary Gray',
    studio: 'Overture Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/gqsc9YZR96F1yf0Jtli9K2Jp0t2.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/mwlLjL3jTDmTdLWe2PyUVqYQTuK.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/YFfE628QGh8JnnPMlNzDDGf7NM.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/gqsc9YZR96F1yf0Jtli9K2Jp0t2.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tense noir score — Tyler performed electric cello and piano himself; recorded with 52-piece ensemble. Director Gray called it "a CLASSIC score."',
    accolades: ['ASCAP Film & TV Music Award 2010']
  },
  {
    status: 'published',
    id: 'expendables',
    ticker: 'THE EXPENDABLES',
    displayTitle: 'THE EXPENDABLES',
    title: 'The Expendables',
    year: '2010',
    director: 'Sylvester Stallone',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/sJpbDELfC8VjlRBOOkMJxxWpUg7.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/yBv9RxlWPXRCvjMFsrmB1pxwWo6.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/eRvo5lY5SRsm163Csqtd7lRxaAE.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/sJpbDELfC8VjlRBOOkMJxxWpUg7.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: '80-piece Czech Philharmonic orchestra over three months — prioritised redemption and emotion over pure action; melancholy undercurrent beneath the martial rhythms.',
    accolades: []
  },
  {
    status: 'published',
    id: 'battlela',
    ticker: 'BATTLE: LOS ANGELES',
    displayTitle: 'BATTLE: LA',
    title: 'Battle: Los Angeles',
    year: '2011',
    director: 'Jonathan Liebesman',
    studio: 'Columbia / Sony Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/buspsNeIGOAznaYQsnGDmQLZakW.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/9iGSPl6rAAgxeUw2uuqJt6YVOCX.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/xl6xyJ3t5EhGoro9zLa21uUrPU5.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/buspsNeIGOAznaYQsnGDmQLZakW.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Large choir and Hollywood Studio Symphony at Streisand Scoring Stage — Tyler also layered pre-recorded material from his home studio.',
    accolades: ['BMI Film & TV Award']
  },
  {
    status: 'published',
    id: 'fast5',
    ticker: 'FAST FIVE',
    displayTitle: 'FAST FIVE',
    title: 'Fast Five',
    year: '2011',
    director: 'Justin Lin',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/tQN9JEQ4N4aqej7O6AkQtt0dLpt.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/lvSxooYCRuF3S2kHWXYTrcOtYco.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/t7Wug1SDD4nbfFS1kOigJ4unXnY.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/tQN9JEQ4N4aqej7O6AkQtt0dLpt.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'The instalment where the team dynamic became the franchise\'s identity — Tyler described it as the film that proved the series had elevated to a new level.',
    accolades: []
  },
  {
    status: 'published',
    id: 'finaldestination5',
    ticker: 'FINAL DESTINATION 5',
    displayTitle: 'FINAL DESTINATION 5',
    title: 'Final Destination 5',
    year: '2011',
    director: 'Steven Quale',
    studio: 'Warner Bros. / New Line Cinema',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/5cG2XcylxUIclQsGPBKTtfoqcBV.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/1yl167CJYFFI2G0fY2RB0NTqEl8.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/xjp3ySB9qNqQj5Vu6UZ4L7nD6qd.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/5cG2XcylxUIclQsGPBKTtfoqcBV.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s second Final Destination score — continued the franchise tone after taking over from Shirley Walker.',
    accolades: ['ASCAP Film Award']
  },
  {
    status: 'published',
    id: 'expendables2',
    ticker: 'THE EXPENDABLES 2',
    displayTitle: 'EXPENDABLES 2',
    title: 'The Expendables 2',
    year: '2012',
    director: 'Simon West',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/ihKsZZYMbyHXC1L7s90WDLITdC5.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/41QdmNKbwmVD7R6A7hMqMe9FYMy.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/nPes1QKEGftpehrdUN2c5JIT1i4.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/ihKsZZYMbyHXC1L7s90WDLITdC5.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Second entry in the action-ensemble franchise — expanded orchestral scoring continuing Tyler\'s established thematic work.',
    accolades: []
  },
  {
    status: 'published',
    id: 'nowyouseeme',
    ticker: 'NOW YOU SEE ME',
    displayTitle: 'NOW YOU SEE ME',
    title: 'Now You See Me',
    year: '2013',
    director: 'Louis Leterrier',
    studio: 'Summit / Lionsgate',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/xEY0MV2jSQBz9iOJfCFvLTiPGMA.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/wXLuBBdD2jFSnHqUy2k5oF9ruqM.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/eElj9dzrnXS7Euuz8MD3CohQ02M.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/xEY0MV2jSQBz9iOJfCFvLTiPGMA.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Kinetic orchestral score matching the film\'s illusionist energy — propulsive writing capturing the sleight-of-hand heist thriller tone.',
    accolades: []
  },
  {
    status: 'published',
    id: 'thordarkworld',
    ticker: 'THOR: THE DARK WORLD',
    displayTitle: 'THOR: DARK WORLD',
    title: 'Thor: The Dark World',
    year: '2013',
    director: 'Alan Taylor',
    studio: 'Marvel Studios',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/5QEOy0QEpad9QsXeMxuGHPXMale.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/90seuFwm25GWNbF1ydkaPa4DrdO.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/uhYoytlNaq46dG81wLmHqaSuzWu.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/5QEOy0QEpad9QsXeMxuGHPXMale.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s second MCU score — and the film for which he composed the Marvel Studios fanfare used in all MCU films from 2013 to 2016.',
    accolades: ['Marvel Studios Fanfare Composer']
  },
  {
    status: 'published',
    id: 'tmnt2014',
    ticker: 'TEENAGE MUTANT NINJA TURTLES',
    displayTitle: 'TMNT',
    title: 'Teenage Mutant Ninja Turtles',
    year: '2014',
    director: 'Jonathan Liebesman',
    studio: 'Paramount / Nickelodeon',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/eezsbzYPbYKjjh6E1XHDBNlLynh.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/hRthWraAFgQ1CHfRt458aCTWZb3.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/4uB73b28Jd2TP58SRjYHeN5KA3J.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/eezsbzYPbYKjjh6E1XHDBNlLynh.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Full orchestral and choral scoring — Tyler also co-wrote the end-credits single "Shell Shocked" (as Madsonik) with Wiz Khalifa.',
    accolades: ['BMI Film & TV Award']
  },
  {
    status: 'published',
    id: 'expendables3',
    ticker: 'THE EXPENDABLES 3',
    displayTitle: 'EXPENDABLES 3',
    title: 'The Expendables 3',
    year: '2014',
    director: 'Patrick Hughes',
    studio: 'Lions Gate Films',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/d3B8BQDmEEK2Qy6tjYRP3hkpv6J.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/xSfBWkAarrPwwfiGBAMt8wqxUUH.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/sJDBJxKWG7h3VpG6jc9Mm9bw4kG.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/d3B8BQDmEEK2Qy6tjYRP3hkpv6J.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s most full-throttle Expendables entry — the third and final instalment in the franchise.',
    accolades: []
  },
  {
    status: 'published',
    id: 'nowyouseeme2',
    ticker: 'NOW YOU SEE ME 2',
    displayTitle: 'NOW YOU SEE ME 2',
    title: 'Now You See Me 2',
    year: '2016',
    director: 'Jon M. Chu',
    studio: 'Summit / Lionsgate',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/oFQilRMEq6yQbtMPxIYWpXeQ5ZN.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/d7VjqwhBrGwJ2M5hIfvS9O3sZc8.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/zwVYcoE9PsZFlxFwSOcwAZEsmOH.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/oFQilRMEq6yQbtMPxIYWpXeQ5ZN.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Sequel returning with the same kinetic illusionist-heist orchestral energy — Tyler\'s second collaboration with director Jon M. Chu.',
    accolades: []
  },
  {
    status: 'published',
    id: 'fateoffurious',
    ticker: 'THE FATE OF THE FURIOUS',
    displayTitle: 'FATE OF THE FURIOUS',
    title: 'The Fate of the Furious',
    year: '2017',
    director: 'F. Gary Gray',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/3IJ8kG8i84PncXkSovu0PaZQfjM.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/awuUwOAGCPqC4mIDQmeKdPiiLR5.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/3IJ8kG8i84PncXkSovu0PaZQfjM.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Darker orchestral underpinning reflecting themes of betrayal and vengeance — Tyler\'s second collaboration with director F. Gary Gray.',
    accolades: []
  },
  {
    status: 'published',
    id: 'mummy2017',
    ticker: 'THE MUMMY',
    displayTitle: 'THE MUMMY',
    title: 'The Mummy',
    year: '2017',
    director: 'Alex Kurtzman',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/i4ZougHEyBAboDpi6jsaTUDTjUl.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/ikXJLSwHuFIGe1HO0KpqSHRwlic.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/dQWiYr1cNV0IUr6UA1HKxCm4uU.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/i4ZougHEyBAboDpi6jsaTUDTjUl.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Over two hours recorded with 84-piece orchestra and 32-voice choir at Abbey Road — choir sang Egyptian phrases; six interlocking themes.',
    accolades: []
  },
  {
    status: 'published',
    id: 'powerrangers2017',
    ticker: 'SABAN\'S POWER RANGERS',
    displayTitle: 'POWER RANGERS',
    title: 'Saban\'s Power Rangers',
    year: '2017',
    director: 'Dean Israelite',
    studio: 'Lionsgate / Saban',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/2vcdZBbf7sPPzIHfN5ial24UbxK.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/lVkd7ZUSoa6yxwGaJ1VB32tVcRP.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/oWTxPQ3hMBoCFOyntEnobMs7vTl.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/2vcdZBbf7sPPzIHfN5ial24UbxK.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Orchestral score for the superhero-origin reboot — Tyler captured the scale and mythology of the franchise for a new generation.',
    accolades: []
  },
  {
    status: 'published',
    id: 'xxx3',
    ticker: 'XXX: RETURN OF XANDER CAGE',
    displayTitle: 'xXx: XANDER CAGE',
    title: 'xXx: Return of Xander Cage',
    year: '2017',
    director: 'D.J. Caruso',
    studio: 'Paramount Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/cFcXilLbI7yjPIYB58AZiOyUnoh.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/4QLdZ2A8mkDWp2rpfgDrwmeCtUW.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/7KAXYsemH14agl4ohhNeIxwWXhj.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/cFcXilLbI7yjPIYB58AZiOyUnoh.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'High-energy global action score — Tyler\'s second collaboration with director D.J. Caruso after Eagle Eye.',
    accolades: []
  },
  {
    status: 'published',
    id: 'readyornot',
    ticker: 'READY OR NOT',
    displayTitle: 'READY OR NOT',
    title: 'Ready or Not',
    year: '2019',
    director: 'Matt Bettinelli-Olpin & Tyler Gillett',
    studio: 'Fox Searchlight',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/oJ1MIABA0WF0a7MDVQnnMvBdex8.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/5clwbYVMmV5FytxYO8KZ5LpJcQZ.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/oKX8t52F25bkWUWVXiAUfTXFnLA.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/oJ1MIABA0WF0a7MDVQnnMvBdex8.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Dark horror-comedy — Tyler\'s first collaboration with Radio Silence directors; score walks the line between menace and black humour.',
    accolades: ['89% on Rotten Tomatoes']
  },
  {
    status: 'published',
    id: 'escaperoom',
    ticker: 'ESCAPE ROOM',
    displayTitle: 'ESCAPE ROOM',
    title: 'Escape Room',
    year: '2019',
    director: 'Adam Robitel',
    studio: 'Sony Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/adCkjAt5Hc4uv0gouVslziGmB9d.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/kNzbHOO4RdC9GW3X0KtJeVvMcoo.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Psychological thriller — co-composed with John Carey; claustrophobic tension throughout.',
    accolades: []
  },
  {
    status: 'published',
    id: 'fivefeetapart',
    ticker: 'FIVE FEET APART',
    displayTitle: 'FIVE FEET APART',
    title: 'Five Feet Apart',
    year: '2019',
    director: 'Justin Baldoni',
    studio: 'CBS Films / Roadside Attractions',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/27ZkYMWynuK2qiDP6awc3MsCaOs.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/cYdHaKx6Ihj1BIvbxpCxIGXfZ02.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/d7wa3VpUpKDQ7GG9EMw8zSJCFoI.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/27ZkYMWynuK2qiDP6awc3MsCaOs.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Emotionally-driven orchestral score — Tyler\'s first collaboration with director Justin Baldoni.',
    accolades: []
  },
  {
    status: 'published',
    id: 'rambolastblood',
    ticker: 'RAMBO: LAST BLOOD',
    displayTitle: 'RAMBO: LAST BLOOD',
    title: 'Rambo: Last Blood',
    year: '2019',
    director: 'Adrián Grünberg',
    studio: 'Lionsgate / Millennium',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/pAsZ0ifQwKTHVab8bCHHn2qtizE.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/oV6hweFSXOGuobS7Ro3x9G0G4Ln.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler returned for the fifth and final Rambo instalment — recorded at Slovak Radio Concert Hall; released by Lakeshore Records.',
    accolades: []
  },
  {
    status: 'published',
    id: 'clouds',
    ticker: 'CLOUDS',
    displayTitle: 'CLOUDS',
    title: 'Clouds',
    year: '2020',
    director: 'Justin Baldoni',
    studio: 'Walt Disney Pictures (Disney+)',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/L7DIiAdP8DnNqOh7454ZrTYspR.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/jPuKafyDEEz3q5fk35kyJUJoiQh.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/nbAbAk80aWCpOS5kOPYJ1L9kE1R.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/L7DIiAdP8DnNqOh7454ZrTYspR.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Emotionally resonant biographical drama — Tyler and Baldoni\'s second collaboration; score carries the warmth and grief of the real story.',
    accolades: []
  },
  {
    status: 'published',
    id: 'f9',
    ticker: 'F9: THE FAST SAGA',
    displayTitle: 'F9',
    title: 'F9: The Fast Saga',
    year: '2021',
    director: 'Justin Lin',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/sH1W4KLcrVa7R9fk3rzUnXmDvqE.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/gGTCDNEvwG848u34Op1nZNALLUr.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler focused on Toretto family mythology — incorporated material from Tokyo Drift (his 2006 franchise debut) alongside new compositions for the film\'s space sequences.',
    accolades: []
  },
  {
    status: 'published',
    id: 'escaperoom2',
    ticker: 'ESCAPE ROOM: TOURNAMENT OF CHAMPIONS',
    displayTitle: 'ESCAPE ROOM 2',
    title: 'Escape Room: Tournament of Champions',
    year: '2021',
    director: 'Adam Robitel',
    studio: 'Sony Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/qo9tN87uTsbXnaAob6aa7U33ayb.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/sD7Nx80jHJdYRvQJVL2wvkzfDGo.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/kiqHtUr8ohIxwu60rs8G9FFMhNF.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/qo9tN87uTsbXnaAob6aa7U33ayb.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Sequel — Tyler and John Carey returned with the same claustrophobic psychological approach for the follow-up.',
    accolades: []
  },
  {
    status: 'published',
    id: 'thosewho',
    ticker: 'THOSE WHO WISH ME DEAD',
    displayTitle: 'THOSE WHO WISH ME DEAD',
    title: 'Those Who Wish Me Dead',
    year: '2021',
    director: 'Taylor Sheridan',
    studio: 'Warner Bros. / New Line Cinema',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/dripzzOmvwaWCZlPUsWW2jJ89Hk.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/igpgdOlr0KOREhk0BbU7fymMY4F.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler and Sheridan\'s film collaboration alongside Yellowstone — Tyler described capturing "two lost souls searching for deliverance."',
    accolades: []
  },
  {
    status: 'published',
    id: 'scream2022',
    ticker: 'SCREAM',
    displayTitle: 'SCREAM',
    title: 'Scream',
    year: '2022',
    director: 'Matt Bettinelli-Olpin & Tyler Gillett',
    studio: 'Paramount / Spyglass Media',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/g3UTK29RMThW0OIvWTLDfSPCHSV.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/3kIcS0w8AjiJ05vtKSE1kK3dbPW.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler replaced Marco Beltrami as franchise composer — dark orchestral approach honouring Wes Craven\'s legacy; his first of three Scream entries with Radio Silence.',
    accolades: []
  },
  {
    status: 'published',
    id: 'chipndale',
    ticker: 'CHIP \'N DALE: RESCUE RANGERS',
    displayTitle: 'CHIP N DALE',
    title: 'Chip \'n Dale: Rescue Rangers',
    year: '2022',
    director: 'Akiva Schaffer',
    studio: 'Walt Disney Pictures (Disney+)',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/qK7Ssnrfvrt65F66A1thvehfQg2.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/lcoJYnFnSeTAiPro2ptwxkhYGh2.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/sSadvxbrbVSvaHeuQks5sBuHI4v.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/qK7Ssnrfvrt65F66A1thvehfQg2.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Animated/live-action hybrid comedy — Tyler\'s Disney+ feature balancing nostalgia and contemporary energy.',
    accolades: []
  },
  {
    status: 'published',
    id: 'redeeminglove',
    ticker: 'REDEEMING LOVE',
    displayTitle: 'REDEEMING LOVE',
    title: 'Redeeming Love',
    year: '2022',
    director: 'D.J. Caruso',
    studio: 'Universal Pictures',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/lD8dFIk9wDEvOwZw0RB47e346io.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/zXeExj1zL3ee5msYpWy5sjeUJX7.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/t65Ug6pcWJCQVbU1J1dJnIHmW5P.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/lD8dFIk9wDEvOwZw0RB47e346io.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Biblical romantic drama — Tyler and Caruso\'s third collaboration; sweeping orchestral score built around themes of redemption and grace.',
    accolades: []
  },
  {
    status: 'published',
    id: 'scream6',
    ticker: 'SCREAM VI',
    displayTitle: 'SCREAM VI',
    title: 'Scream VI',
    year: '2023',
    director: 'Matt Bettinelli-Olpin & Tyler Gillett',
    studio: 'Paramount / Spyglass Media',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/44immBwzhDVyjn87b3x3l9mlhAD.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/k6ANeyxAfMRi5xhxIXv1Scn9vc2.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/bXbPP5gfdFAfuxiAekXKD7Xine8.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/44immBwzhDVyjn87b3x3l9mlhAD.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler\'s second Scream franchise entry — co-composed with Sven Faulconer; third collaboration with Radio Silence directors.',
    accolades: []
  },
  {
    status: 'published',
    id: 'transformersone',
    ticker: 'TRANSFORMERS ONE',
    displayTitle: 'TRANSFORMERS ONE',
    title: 'Transformers One',
    year: '2024',
    director: 'Josh Cooley',
    studio: 'Paramount / Hasbro',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/cMfokHWle5lfCreoV08cbmkKv6G.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/gfxGibm7hpZxqPl5DOb95QmHy2g.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/zViRwl3ySscZnbXZJ2Q9wq3SeUG.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/cMfokHWle5lfCreoV08cbmkKv6G.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Animated origin story of Optimus Prime and Megatron — Tyler\'s score captured the mythic scale of the Transformers universe.',
    accolades: ['89% on Rotten Tomatoes']
  },
  {
    status: 'published',
    id: 'abigail',
    ticker: 'ABIGAIL',
    displayTitle: 'ABIGAIL',
    title: 'Abigail',
    year: '2024',
    director: 'Matt Bettinelli-Olpin & Tyler Gillett',
    studio: 'Universal / Blumhouse',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/2TPoqmatGDfBOiRxqNoL11ncCJe.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/qkgS7ySaRyI1qcQB24vndfdq7Zw.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/yILM8Fzl7LOc38vQvWQ1HzwXJnU.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/2TPoqmatGDfBOiRxqNoL11ncCJe.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Vampire horror-comedy — Tyler\'s third collaboration with Radio Silence; score plays into the genre-blending black humour.',
    accolades: []
  },
  {
    status: 'published',
    id: 'nowyouseeme3',
    ticker: 'NOW YOU SEE ME: NOW YOU DON\'T',
    displayTitle: 'NOW YOU SEE ME 3',
    title: 'Now You See Me: Now You Don\'t',
    year: '2025',
    director: 'Ruben Fleischer',
    studio: 'Summit / Lionsgate',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/dHSz0tSFuO2CsXJ1CApSauP9Ncl.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/ufqytAlziHq5pljKByGJ8IKhtEZ.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/9LzXmDMINrBqrNE5gdBCCKy6RFF.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/dHSz0tSFuO2CsXJ1CApSauP9Ncl.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Tyler returned for the third instalment of the illusionist heist franchise.',
    accolades: []
  }
];

// ─── TELEVISION ───
const TV_SHOWS = [
  {
    status: 'published',
    id: 'childrenofdune',
    ticker: 'FRANK HERBERT\'S CHILDREN OF DUNE',
    displayTitle: 'CHILDREN OF DUNE',
    title: 'Frank Herbert\'s Children of Dune',
    year: '2003',
    director: 'Greg Yaitanes',
    studio: 'Sci-Fi Channel',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/8tko4lM3VE6Rpye7IbilDpdHsWh.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/eXUaXcwvuqzWcMNA2Uh1Qfljlfx.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/8tko4lM3VE6Rpye7IbilDpdHsWh.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/8tko4lM3VE6Rpye7IbilDpdHsWh.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: '36 tracks composed in one month — one of Tyler\'s most celebrated scores and one of the best-selling TV soundtrack releases of 2003.',
    accolades: ['Grammy Nominated', 'GoldSpirit Award']
  },
  {
    status: 'published',
    id: 'hawaii50',
    ticker: 'HAWAII FIVE-0',
    displayTitle: 'HAWAII FIVE-0',
    title: 'Hawaii Five-0',
    year: '2010–2020',
    director: 'Various',
    studio: 'CBS',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/tLccUh3uazZ9TkLhe53UwprJhI4.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/1QlfuYK0ff6ZSrW7xEEXB90lcPj.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/e13nxVdxPGSnRA7685Z8d5DsjYh.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/tLccUh3uazZ9TkLhe53UwprJhI4.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Main title and score for the long-running CBS procedural — Tyler\'s distinctive action scoring defined the show\'s propulsive identity for 10 seasons.',
    accolades: ['10 Seasons', 'CBS']
  },
  {
    status: 'published',
    id: 'terranova',
    ticker: 'TERRA NOVA',
    displayTitle: 'TERRA NOVA',
    title: 'Terra Nova',
    year: '2011',
    director: 'Various',
    studio: 'Fox / Amblin Entertainment',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/3kz0Hp1sO7JnHFX8BzTokdxTuwY.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/nqUIHf0Bg33atelWw5mlw47ilVv.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/7K1YDNuIqaBPasl7E4gc0EkhzpZ.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/3kz0Hp1sO7JnHFX8BzTokdxTuwY.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Epic sci-fi adventure series from Steven Spielberg\'s Amblin Entertainment — Tyler\'s large-scale orchestral score matched the show\'s prehistoric grandeur.',
    accolades: ['Spielberg / Amblin Production']
  },
  {
    status: 'published',
    id: 'transformersprime',
    ticker: 'TRANSFORMERS PRIME',
    displayTitle: 'TRANSFORMERS PRIME',
    title: 'Transformers Prime',
    year: '2010–2013',
    director: 'Various',
    studio: 'Hasbro Studios / Hub Network',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/owhEUs8ZVyuXpxsD2BIcriBotUo.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/aNl0M97lcTso3EIxabo57LjnE2C.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/1zydfa92P9cl2NAfWKDtJCm6wqB.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/owhEUs8ZVyuXpxsD2BIcriBotUo.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Animated series blending cinematic orchestral scoring with the mythology of the Transformers universe — a defining companion to Tyler\'s later Transformers One film.',
    accolades: ['Emmy Award — Outstanding Animated Program 2013']
  },
  {
    status: 'published',
    id: 'sleepyhollow',
    ticker: 'SLEEPY HOLLOW',
    displayTitle: 'SLEEPY HOLLOW',
    title: 'Sleepy Hollow',
    year: '2013–2017',
    director: 'Various',
    studio: 'Fox',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/jHkeqXYUU4khZEig88AFLMUOmep.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/68O4RZtzxh7SDWfTpfhr7OZVsag.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/yYNe5co2dS3bXH6rY67jA7C4SYP.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/jHkeqXYUU4khZEig88AFLMUOmep.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Supernatural thriller series — dark, atmospheric orchestral scoring blending colonial-era Americana with horror textures.',
    accolades: []
  },
  {
    status: 'published',
    id: 'scorpion',
    ticker: 'SCORPION',
    displayTitle: 'SCORPION',
    title: 'Scorpion',
    year: '2014–2018',
    director: 'Various',
    studio: 'CBS',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/fThSrHjuS1X82XoH9VrtvgvMIXm.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/9xxRNn7ObFOozBgvNB5xpEiVlIM.jpg', pos: 'center 30%' },
      { img: 'https://image.tmdb.org/t/p/w780/iZIZFDO9ZoBcHWz0CvkwbME7kOp.jpg', pos: '75% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/fThSrHjuS1X82XoH9VrtvgvMIXm.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'CBS action procedural inspired by the life of genius hacker Walter O\'Brien — Tyler\'s propulsive, kinetic score anchored four seasons of high-stakes problem-solving.',
    accolades: ['4 Seasons', 'CBS']
  },
  {
    status: 'published',
    id: 's1883',
    ticker: '1883',
    displayTitle: '1883',
    title: '1883',
    year: '2021–2022',
    director: 'Taylor Sheridan',
    studio: 'Paramount+',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/uQUHCqxHsG9blvtCoL7vluMG9Jp.jpg', pos: '20% center' },
      { img: 'https://image.tmdb.org/t/p/w780/s6vtxvIesX6b499l6XxDqTABFOt.jpg', pos: 'center 35%' },
      { img: 'https://image.tmdb.org/t/p/w780/1hWkBgd6INAtDoRqpe7dASAdjXu.jpg', pos: '78% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/uQUHCqxHsG9blvtCoL7vluMG9Jp.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'Yellowstone prequel following the Dutton family\'s 19th-century journey West — Tyler\'s most intimate and emotionally raw Sheridan collaboration.',
    accolades: ['Yellowstone Universe', 'Paramount+']
  },
  {
    status: 'published',
    id: 's1923',
    ticker: '1923',
    displayTitle: '1923',
    title: '1923',
    year: '2022–',
    director: 'Taylor Sheridan',
    studio: 'Paramount+',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/vIioWssbxRtEkIzgj8r0pCWYkYM.jpg', pos: '22% center' },
      { img: 'https://image.tmdb.org/t/p/w780/ArADNzkWMiyVLxScTsFm5hAUSBs.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/9I6LgZ5110ycg4pyobJxGTFWFCF.jpg', pos: '80% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/vIioWssbxRtEkIzgj8r0pCWYkYM.jpg',
    trailerVideoId: '',
    spotifyUri: '',
    tracks: [],
    description: 'The Prohibition-era Dutton chapter — Tyler continues his defining Sheridan collaboration, scoring the Depression-era American West with sweeping orchestral grandeur.',
    accolades: ['Yellowstone Universe', 'Paramount+']
  }
];

const INTRO_SLIDE = {
  cards: [
    { img: 'https://image.tmdb.org/t/p/w780/kIBK5SKwgqIIuRKhhWrJn3XkbPq.jpg', pos: '20% center' },
    { img: 'https://img.youtube.com/vi/8AYy-BcjRXg/maxresdefault.jpg', pos: 'center 20%' },
    { img: 'https://image.tmdb.org/t/p/w780/xZFRxfZKwEnvPpwq0RHdU8hmvqF.jpg', pos: '78% center' }
  ]
};

const VIDEOS = [
  { status: 'published', id: 'dogHOIdjefc', title: 'In The Studio — Brian Tyler' },
  { status: 'published', id: 'tmeOjFno6Do', title: 'Avengers: Age of Ultron' },
  { status: 'published', id: '2CzoSeClcw0', title: 'Iron Man 3' },
  { status: 'published', id: 'TnGl01FkMMo', title: 'The Super Mario Bros. Movie' },
  { status: 'published', id: 'VVbIrBSlBvo', title: 'Fast X' },
  { status: 'published', id: 'ZQ-YX-5bAs0', title: 'Crazy Rich Asians' },
  { status: 'published', id: 'suobrMPBLlo', title: 'Yellowstone' },
  { status: 'published', id: 'yISKeT6sDOg', title: 'Furious 7' },
  { status: 'published', id: 'SW7FsQqsB2I', title: 'Nuremberg — Score Suite' }
];
