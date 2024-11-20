import { Config } from 'tailwindcss/types/config';

export const defaultTheme: Config['theme'] = {
  colors: {
    inherit: 'inherit',
    transparent: 'transparent',
    dimmed: 'rgba(0, 0, 0, 0.2)',
    white: '#ffffff',
    black: '#000000',
    grayscale: {
      100: 'rgba(0, 0, 0, 1)',
      90: 'rgba(22, 23, 26, 1)',
      80: 'rgba(33, 35, 41, 1)',
      70: 'rgba(49, 53, 61, 1)',
      60: 'rgba(93, 103, 122, 1)',
      50: 'rgba(139, 150, 173, 1)',
      40: 'rgba(201, 206, 214, 1)',
      30: 'rgba(230, 233, 240, 1)',
      20: 'rgba(240, 242, 245, 1)',
      10: 'rgba(255, 255, 255, 1)',
      '50-translucence': 'rgba(139, 150, 173, 0.20000000298023224)',
    },
    red: {
      50: 'rgba(255, 51, 51, 1)',
      40: 'rgba(255, 77, 77, 1)',
    },
    orange: {
      50: 'rgba(250, 107, 25, 1)',
      40: 'rgba(255, 125, 51, 1)',
    },
    yellow: {
      60: 'rgba(235, 164, 0, 1)',
      50: 'rgba(255, 186, 26, 1)',
      40: 'rgba(255, 194, 51, 1)',
    },
    lightgreen: {
      50: 'rgba(105, 214, 21, 1)',
      60: 'rgba(67, 153, 0, 1)',
    },
    blue: {
      60: 'rgba(29, 78, 178, 1)',
      50: 'rgba(26, 102, 255, 1)',
      40: 'rgba(51, 119, 255, 1)',
      30: 'rgba(153, 187, 255, 1)',
      20: 'rgba(209, 224, 255, 1)',
    },
    purple: {
      50: 'rgba(194, 26, 255, 1)',
      40: 'rgba(201, 51, 255, 1)',
    },
    violet: {
      50: 'rgba(118, 26, 255, 1)',
      20: 'rgba(231, 214, 255, 1)',
    },
  },
  gap: {
    6: '6px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
  },
  fontFamily: {
    'wanted-sans': ['var(--font-wanted-sans)'],
  },
};
