/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        code:{
          'primary':'#004E97',
          'text-color':' #637D94',
          'text-heading':'#222C2E',
          'dash_board_primary':'#004AA2',
          'nav_dash':'#FBFCFC'

        },
        buyer : {
          'primary':'#004AA2',
          'heading':'#222C2E',
          'button_1':'#DCFFD0',
          'button_2':'#FDCECE',
          'know_more':'#070242',
          'small_heading':'#002046',
          'button_1_text':' #00769B',
          'text-color':'#637F94',
          'second_know_more':'#004AA2',
          'dash_bg':'#FBFBFB',
          'background':'#EBF4F9'
        },

        seller:{
          'heading' :'#263238',
          'border_color':'#00C1EC',
          'timing_color':'#BEE5F5'
        }
      },
      height:{
        code:{
          'height':'566px',
          'width':'406px'
        }
      },
      fontSize:{
        'heading':'32px'
      }
    },
  },
  plugins: [],
}
