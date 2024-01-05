/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'circular-std' : ['Circular Std', 'sans-serif']
      },
      backgroundImage: {
        'imagecard01' : "url('../public/images/cardimage (1).jpg')",
        'imagecard02' : "url('../public/images/cardimage (2).jpg')",
        'imagecard03' : "url('../public/images/cardimage (3).jpg')",
      },
      colors:{
        "primary" : '#5D50C6',
        "secondary" : '#F85E9F',
        "yellow" : '#FACD49',
        "orange" : "#FF5722",
        'cream-newsletter' : 'rgba(250, 205, 73, 0.08)'
      },
      boxShadow: {
        'button-explore-the-world' : [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.07)', 
          '0px 34px 75px 0px rgba(0, 0, 0, 0.07)', 
          '0px 137px 137px 0px rgba(0, 0, 0, 0.06)', 
          '0px 308px 185px 0px rgba(0, 0, 0, 0.04)', 
          '0px 548px 219px 0px rgba(0, 0, 0, 0.01)', 
          '0px 856px 240px 0px rgba(0, 0, 0, 0.00)'
        ],
        'button-getStarted' : [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
          '0px 5px 11px 0px rgba(0, 0, 0, 0.10)',
          '0px 20px 20px 0px rgba(0, 0, 0, 0.09)', 
          '0px 45px 27px 0px rgba(0, 0, 0, 0.05)', 
          '0px 81px 32px 0px rgba(0, 0, 0, 0.01)', 
          '0px 126px 35px 0px rgba(0, 0, 0, 0.00)'
        ],
        'card-easyBooking' : [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)', 
          '0px 41px 89px 0px rgba(0, 0, 0, 0.10)'
        ],
        'card-destinasi01' : [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.05)', 
          '0px 32px 71px 0px rgba(0, 0, 0, 0.05)', 
          '0px 128px 128px 0px rgba(0, 0, 0, 0.04)', 
          '0px 288px 173px 0px rgba(0, 0, 0, 0.03)', 
          '0px 513px 205px 0px rgba(0, 0, 0, 0.01)', 
          '0px 801px 224px 0px rgba(0, 0, 0, 0.00)'
        ]
      },
      dropShadow: {
        'buttonArrowKanan' : [
          '0px 0px 0px rgba(0, 0, 0, 0.08)',
          '0px 7px 16px rgba(0, 0, 0, 0.07)',
          '0px 29px 29px rgba(0, 0, 0, 0.06)',
          '0px 65px 39px rgba(0, 0, 0, 0.04)',
          '0px 116px 46px rgba(0, 0, 0, 0.01)',
          '0px 181px 51px rgba(0, 0, 0, 0.00)'
        ]
      }
    },
  },
  plugins: [],
}

