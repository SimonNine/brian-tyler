// ─── FILM DATA ───
const FILMS = [
  {
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
    spotifyUri: 'artist:109FvbnDVNag1UcJDVpFlr', // album not on Spotify (Disney/Hollywood Records) — falls back to artist page
    tracks: [
      'Avengers: Age of Ultron (Main Theme)', 'Heroes Assemble', 'New Avengers',
      'Ultron Wakes', 'The Iron Legion', 'Hulk Smash', 'The Enemy Among Us',
      'Seoul', 'Capture and Escape', 'No Strings on Me', 'Lifting Mjolnir',
      'Sokovia', 'Vision', 'Age of Ultron (End Credits)'
    ],
    description: "Tyler's thunderous brass and choir drove every battle cue with a soaring new Avengers theme — recorded at Capitol Studios and Abbey Road.",
    accolades: ['ASCAP Top Box Office Film']
  },
  {
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
      'Can You Dig It (Main Titles)', 'Iron Man 3 (Main Theme)', 'The Mechanic',
      'Heroes Fall', 'Dis-Assembly', 'Extremis', 'Barrel of Monkeys',
      'The Vault', 'House Party', 'Back in Business', 'Battle at the Mansion',
      'Fail-Safe', 'Tony Stark Revealed', 'Iron Man Returns'
    ],
    description: "A bold 9-note horn motif recorded at Abbey Road Studios — blockbuster power meeting intimate character texture.",
    accolades: ['ASCAP Top Box Office Film']
  },
  {
    id: 'mario',
    ticker: 'THE SUPER MARIO BROS. MOVIE',
    displayTitle: 'MARIO',
    title: 'The Super Mario Bros. Movie',
    year: '2023',
    director: 'Aaron Horvath & Michael Jelenic',
    studio: 'Illumination / Nintendo',
    cards: [
      { img: 'https://image.tmdb.org/t/p/w780/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg', pos: '25% center' },
      { img: 'https://image.tmdb.org/t/p/w780/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg', pos: 'center 40%' },
      { img: 'https://image.tmdb.org/t/p/w780/dBkvawTlvciUvW7jmNAtuvhdtdr.jpg', pos: '70% center' }
    ],
    overlayImg: 'https://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    trailerVideoId: 'TnGl01FkMMo',
    spotifyUri: 'album:3QITNyRzvTqn0t9tLmS1Vd',
    tracks: [
      'Super Mario Bros. Opus', 'Welcome to the Mushroom Kingdom', 'King of the Koopas',
      "It's-a Mario", "Bowser's Castle", 'Rainbow Road', "Peach's Theme",
      'Into the Pipes', 'Donkey Kong Battle', 'Rainbow Road Race',
      'Final Battle', "Let's Go!", 'Together (End Credits)'
    ],
    description: "98% original orchestral music woven with Koji Kondo's legendary game themes as Easter eggs throughout.",
    accolades: ['Annie Award Nom. — Music in Animation', '$1.36B Global Box Office']
  },
  {
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
      'Fast X Main Title', "Dante's Theme", 'Family Forever',
      'Streets of Rome', 'The Chase', 'God is a Woman (Instrumental)',
      'Full Throttle', 'Into the Night', 'No Way Back',
      "Dom's Theme", 'Always Remember'
    ],
    description: "Propulsive score introducing Dante's menacing theme — his fifth Fast & Furious instalment pushing the franchise's sonic identity to new extremes.",
    accolades: ['5th Fast & Furious Score']
  },
  {
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
      'Crazy Rich Asians (Main Theme)', 'Nick and Rachel', 'Text Ting Swing',
      'Approaching the Palace', 'The Gossip Circuit', 'An Awkward Dinner',
      'Singapore Rain', 'Love Theme', 'Chess',
      'The Wedding', 'Family Above All', 'Goodbye Singapore'
    ],
    description: "Lush orchestral romance infused with jazz big band — 2019 Oscar shortlisted for Best Original Score.",
    accolades: ['Golden Globe Nom. — Best Original Score', 'Oscar Shortlisted — Best Original Score']
  },
  {
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
      'Yellowstone (Main Title)', 'Vision Quest', "Cowboys Don't Say Goodbye",
      'The Dutton Ranch', 'Open Range', "Rip's Code", 'Beth',
      'Tate', 'Wild Horses', 'Montana Sky',
      "Season's End", 'Legacy'
    ],
    description: "Intimate orchestral Americana — cello, fiddle, charango — scored with the sweep of an epic and the intimacy of a character study.",
    accolades: ['Emmy Winner — Outstanding Main Title Theme', 'Most Watched Cable Series']
  },
  {
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
      'Furious 7 (Main Title)', 'The Race is On', "God's Eye",
      "Brian's Theme", 'Dubai Heist', 'Ramsey',
      'Going Underground', 'Stairway to Heaven', 'Deckard Shaw',
      'For Dom', 'No Brakes', 'You Will Be Missed'
    ],
    description: "Kinetic action cues and a deeply emotional farewell to Paul Walker — a score that captured a global audience's grief.",
    accolades: ['$1.52B Global Box Office', 'ASCAP Top Box Office Film']
  },
  {
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
      'Nuremberg (Main Theme)', 'The Tribunal Convenes', 'Opening Arguments',
      'The Accused', 'Witness to History', 'Justice Rising',
      'The Prosecution', 'Dark Testimony', 'Confronting Evil',
      'Verdict', 'The Weight of History', 'Closing Theme'
    ],
    description: "A 25-minute orchestral concerto incorporating actual Dachau alarm bell recordings — Tyler's most historically significant work.",
    accolades: ['2025 Theatrical Release']
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
  { id: 'dogHOIdjefc', title: 'In The Studio — Brian Tyler' },
  { id: 'tmeOjFno6Do', title: 'Avengers: Age of Ultron' },
  { id: '2CzoSeClcw0', title: 'Iron Man 3' },
  { id: 'TnGl01FkMMo', title: 'The Super Mario Bros. Movie' },
  { id: 'VVbIrBSlBvo', title: 'Fast X' },
  { id: 'ZQ-YX-5bAs0', title: 'Crazy Rich Asians' },
  { id: 'suobrMPBLlo', title: 'Yellowstone' },
  { id: 'yISKeT6sDOg', title: 'Furious 7' },
  { id: 'SW7FsQqsB2I', title: 'Nuremberg — Score Suite' }
];
