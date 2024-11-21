import { Config } from 'tailwindcss/types/config';

const HEIGHT = {
  MOBILE_BOTTOM_NAVIGATION: '89px',
};

export const extend: Config['theme'] = {
  backgroundImage: {
    'alert-memo-gradient': 'linear-gradient(90deg, #B1E6E4 0%, #C7DFF6 33.33%, #E4E0F8 66.67%, #EDDEF8 100%)',
  },
  width: {
    mobile: '375px',
    15: '3.75rem',
  },
  height: {
    'mobile-header': '117px',
    'mobile-header-top': '54px',
    'mobile-header-bottom': '60px',
    'mobile-bottom-navigation': HEIGHT.MOBILE_BOTTOM_NAVIGATION,
    15: '3.75rem',
    12.5: '3.125rem',
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
};
