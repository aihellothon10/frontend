import { Config } from 'tailwindcss/types/config';

export const extend: Config['theme'] = {
  width: {
    mobile: '375px',
    15: '3.75rem',
  },
  height: {
    'mobile-header': '117px',
    'mobile-header-top': '54px',
    'mobile-header-bottom': '60px',
    'mobile-bottom-navigation': '89px',
    15: '3.75rem',
    12.5: '3.125rem',
  },
  fontWeight: {
    regular: '400',
  },
  padding: {
    '1.5': '0.375rem',
    '4.25': '1.0625rem',
    'mobile-bottom-navigation-height': '89px',
  },
};
