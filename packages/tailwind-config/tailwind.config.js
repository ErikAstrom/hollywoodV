const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        headingOne:'60px',
        headingThree:'48px',
        headingOneMobile:'40px',
        headingTwoMobile:'60px',
        headingOneMobile:'36px',
        body:'24px',
        bodyMobile:'24px',
        button:'20x',
        buttonMobile:'18px',
      },
      colors: {
        canary:'#E0D62D',
        pebble:'#35383E',
        ivory:'#F3F3F3',
        blackDiamond:'#35383E'
      },
      
    },
  },
  plugins: [],
};
