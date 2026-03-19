export const games = [
  {
    id: 'tapstop',
    name: 'TapStop',
    emoji: '🎯',
    status: 'released',
    tagline: 'Tap exactly at the right moment!',
    shortDesc: 'A precision timing game where every millisecond counts. Stop the bar at the perfect moment to score!',
    description: `TapStop is a precision timing mobile game that challenges you to master the art of stopping. A moving bar speeds across the screen — your goal? Tap at exactly the right moment to stop it in the perfect zone. Sounds simple. Never is.

With 100 hand-crafted levels spread across 10 stunning visual themes — from icy Arctic tundras to blazing Desert Suns — TapStop delivers a constantly fresh experience that rewards practice and punishes rush. Each theme introduces new visual personalities, color palettes, and ambient music, keeping your eyes and ears engaged long after your thumbs are tired.

Built with Flutter for buttery-smooth 60fps performance, TapStop is fully offline, completely free, and contains no pay-to-win mechanics. Just you, the bar, and your reflexes.`,
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.tionplay.tapstop',
    coverEmoji: '🎯',
    primaryColor: '#FF6B2B',
    bgColor: '#1A1108',
    year: 2024,
    platforms: ['android'],
    genres: ['Casual', 'Arcade', 'Timing'],
    features: [
      {
        icon: '🎮',
        title: '100 Unique Levels',
        desc: 'Hand-crafted challenges that escalate in difficulty, keeping you in perfect flow state.',
      },
      {
        icon: '🎨',
        title: '10 Visual Themes',
        desc:
          'Unlock Arctic, Desert, Ocean, Forest, Space, Volcano, Neon, Sunset, Crystal, and Storm themes.',
      },
      {
        icon: '📶',
        title: 'Fully Offline',
        desc: 'No Wi-Fi required. Play anywhere, anytime — on the subway, on the plane, in the mountains.',
      },
      {
        icon: '🆓',
        title: 'Completely Free',
        desc: 'No in-app purchases, no pay-to-win, no subscriptions. Just pure gameplay.',
      },
      {
        icon: '⚡',
        title: '60fps Smooth',
        desc: 'Built with Flutter for buttery smooth performance on all Android devices.',
      },
      {
        icon: '🏆',
        title: 'Star Rating System',
        desc: 'Earn 1, 2, or 3 stars per level based on precision. Aim for perfection.',
      },
    ],
    themes: [
      { id: 'arctic',  name: 'Arctic',  emoji: '❄️',  levels: 10, color: '#6EC6E6' },
      { id: 'desert',  name: 'Desert',  emoji: '🏜️',  levels: 10, color: '#E8A838' },
      { id: 'ocean',   name: 'Ocean',   emoji: '🌊',  levels: 10, color: '#1E90FF' },
      { id: 'forest',  name: 'Forest',  emoji: '🌲',  levels: 10, color: '#2E8B57' },
      { id: 'space',   name: 'Space',   emoji: '🚀',  levels: 10, color: '#7B2FBE' },
      { id: 'volcano', name: 'Volcano', emoji: '🌋',  levels: 10, color: '#FF4500' },
      { id: 'neon',    name: 'Neon',    emoji: '💡',  levels: 10, color: '#FF00FF' },
      { id: 'sunset',  name: 'Sunset',  emoji: '🌅',  levels: 10, color: '#FD8D3C' },
      { id: 'crystal', name: 'Crystal', emoji: '💎',  levels: 10, color: '#00CED1' },
      { id: 'storm',   name: 'Storm',   emoji: '⛈️', levels: 10, color: '#708090' },
    ],
  },
  {
    id: 'coming-soon-1',
    name: '???',
    emoji: '🔮',
    status: 'coming-soon',
    tagline: 'Something mysterious is brewing...',
    shortDesc: 'A new puzzle adventure from Tion Play. Details coming soon!',
    description: 'We\'re hard at work on our next title. Stay tuned for announcements!',
    googlePlayUrl: null,
    coverEmoji: '🔮',
    primaryColor: '#7B2FBE',
    bgColor: '#1A1108',
    year: 2025,
    platforms: ['android'],
    genres: ['Puzzle'],
    features: [],
    themes: [],
  },
  {
    id: 'coming-soon-2',
    name: '???',
    emoji: '⚡',
    status: 'coming-soon',
    tagline: 'Speed, reflexes, and strategy.',
    shortDesc: 'An action game that will test your reaction time in entirely new ways.',
    description: 'High speed. High stakes. Low tolerance for slowness. More soon.',
    googlePlayUrl: null,
    coverEmoji: '⚡',
    primaryColor: '#FFD166',
    bgColor: '#1A1108',
    year: 2025,
    platforms: ['android'],
    genres: ['Action', 'Arcade'],
    features: [],
    themes: [],
  },
]

export function getGame(id) {
  return games.find((g) => g.id === id) || null
}

export function getReleasedGames() {
  return games.filter((g) => g.status === 'released')
}

export function getComingSoonGames() {
  return games.filter((g) => g.status === 'coming-soon')
}
