const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      text: {
        32: '32',
      },
      width:{
        96: '96',
        396: '396',
      },
      height: {
        60: '60',
      },
      colors: {
        mainBlue: '#7CA4D9',
        black: '#191919',
        darkGray: '#888A8C',
        lightGray: '#F8F9FB',
        blueGray: '#E3ECF6',
      },
      transitionTimingFunction: {
        DEFULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFULT: '400ms',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
    },
  },
  plugins: [
    // plugin(({ addComponents, theme, addUtilities }) => {
    //   addComponents({
    //     '.btn-main': {
    //       background: '#7CA4D9',
    //       height: '60px',
    //       width: '396px',
    //       color: 'white',
    //       borderRadius: '14px',
    //       '&:hover': {

    //       }
    //     },
    //   });
    // }),
  ],
};
