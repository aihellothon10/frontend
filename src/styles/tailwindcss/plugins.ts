import plugin from 'tailwindcss/plugin';

import type { Config, PluginAPI } from 'tailwindcss/types/config';

export const plugins: Config['plugins'] = [
  plugin(({ addUtilities }: { addUtilities: PluginAPI['addUtilities'] }) => {
    addUtilities({
      '.title-lg-24-extrabold': {
        '@apply font-nanum-square-extra-bold text-title-lg leading-title-lg': {},
      },
      '.title-md-22-extrabold': {
        '@apply font-nanum-square-extra-bold text-title-md leading-title-md': {},
      },
      '.body-md-17-medium': {
        '@apply font-wanted-sans text-body-md leading-body-md font-medium': {},
      },
      '.body-sm-15-regular': {
        '@apply font-wanted-sans text-body-sm leading-body-sm font-regular': {},
      },
      '.body-sm-15-medium': {
        '@apply font-wanted-sans text-body-sm leading-body-sm font-medium': {},
      },
      '.body-sm-15-semibold': {
        '@apply font-wanted-sans text-body-sm leading-body-sm font-semibold': {},
      },
      '.label-md-14-regular': {
        '@apply font-wanted-sans text-label-md leading-label-md font-regular': {},
      },
      '.label-md-14-medium': {
        '@apply font-wanted-sans text-label-md leading-label-md font-medium': {},
      },
      '.label-md-14-semibold': {
        '@apply font-wanted-sans text-label-md leading-label-md font-semibold': {},
      },
      '.label-sm-12-medium': {
        '@apply font-wanted-sans text-label-sm leading-label-sm font-medium': {},
      },
      '.icon-fill': {
        'font-variation-settings': '"FILL" 1',
      },
      '.icon-lg': {
        '@apply font-material-symbols-rounded-icon text-icon-lg leading-full font-light': {},
      },
      '.icon-md': {
        '@apply font-material-symbols-rounded-icon text-icon-md leading-full font-light': {},
      },
      '.icon-sm': {
        '@apply font-material-symbols-rounded-icon text-icon-sm leading-full font-light': {},
      },
      '.icon-xs': {
        '@apply font-material-symbols-rounded-icon text-icon-xs leading-full font-light': {},
      },
      '.icon-xs-fill': {
        '@apply font-material-symbols-rounded-icon text-icon-xs leading-full font-light icon-fill': {},
      },

      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'none',

        /* Firefox */
        'scrollbar-width': 'none',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },

      '.scrollbar-default': {
        /* IE and Edge */
        '-ms-overflow-style': 'auto',

        /* Firefox */
        'scrollbar-width': 'auto',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'block',
        },
      },
    });
  }),
];
