import { Config } from 'tailwindcss/types/config';

export const extend: Config['theme'] = {
  width: {
    mobile: '375px',
  },
  height: {
    'mobile-header': '117px',
    'mobile-header-top': '54px',
    'mobile-header-bottom': '60px',
    'mobile-bottom-navigation': '89px',
  },
  fontWeight: {
    regular: '400',
  },
  padding: {
    '4.25': '1.0625rem',
    'mobile-bottom-navigation-height': '89px',
  },
};
