import { Config } from 'tailwindcss/types/config';

const HEIGHT = {
  MOBILE_BOTTOM_NAVIGATION: '89px',
};

export const extend: Config['theme'] = {
  backgroundImage: {
    'alert-memo-gradient': 'linear-gradient(90deg, #B1E6E4 0%, #C7DFF6 33.33%, #E4E0F8 66.67%, #EDDEF8 100%)',
    'create-memo-gradient':
      'radial-gradient(143.26% 108.12% at -27.09% 21.92%, #1AFFB6 0%, #1A66FF 63.99%, #BD62FF 100%)',
    'chat-border-gradient': 'radial-gradient(125.74% 175% at 51.14% -36.36%, #1AFFB6 0%, #1A66FF 50%, #BD62FF 86.32%)',
  },
  width: {
    mobile: '480px',
    12.5: '3.125rem',
    13: '3.25rem',
    15: '3.75rem',
    18: '4.5rem',
  },
  height: {
    'mobile-header': '117px',
    'mobile-header-top': '54px',
    'mobile-header-bottom': '60px',
    'mobile-bottom-navigation': HEIGHT.MOBILE_BOTTOM_NAVIGATION,
    12.5: '3.125rem',
    13: '3.25rem',
    15: '3.75rem',
    18: '4.5rem',
  },
  fontWeight: {
    regular: '400',
  },
  padding: {
    '1.5': '0.375rem',
    '2.5': '0.625rem',
    '3.75': '0.9375rem',
    '4.25': '1.0625rem',
    'mobile-bottom-navigation-height': HEIGHT.MOBILE_BOTTOM_NAVIGATION,
  },
  margin: {
    'mobile-bottom-navigation-height': HEIGHT.MOBILE_BOTTOM_NAVIGATION,
  },
  borderWidth: {
    3: '3px',
  },
};
