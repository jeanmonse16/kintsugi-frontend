const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screens: {
          'xs': '425px',
          ...defaultTheme.screens,
      },
      extend: {
        colors: {
          'kintsugi-yellow': '#ffcb05',
          'kintsugi-black': '#010101',
        },
        animation: {
            'slide-bg': 'slideBoth 600s linear infinite',
            'slide-desktop': 'slideBig 150s linear infinite',
            'slide-mobile': 'slideSmall 100s linear infinite',
            'grow-width': 'growFull 0.75s ease-out',
            'move-left': 'moveLeft 0.75s ease-out',
            'move-right': 'moveRight 0.75s ease',
        },
        keyframes: {
            slideBoth: {
              '0%': { backgroundPosition: '0px' },
              '100%': { backgroundPosition: '3840px 6480px' },
            }, 
            slideBig: {
              '0%': { backgroundPosition: '0px' },
              '100%': { backgroundPosition: '1580px' },
            }, 
            slideSmall: {
                '0%': { backgroundPosition: '0px' },
                '100%': { backgroundPosition: '667px' },
            },
            growFull: {
                '0%': { width: '0px' },
                '100%': { width: '100%' },
            }, 
            moveLeft: {
                '0%': { left: '33%' },
                '100%': { left: '0' },
            },
            moveRight: {
                '0%': { right: '33%' },
                '100%': { right: '0' },
            }
          }
      }
  },
  plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
  
            /* Firefox */
            'scrollbar-width': 'none',
  
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }
        }
        )
      })
    ],
}
