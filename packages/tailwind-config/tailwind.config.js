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
        headingOne:['60px', {lineHeight:'65px'}],
        headingThree:['48px', {lineHeight:'56px'}],
        headingOneMobile:['40px',{lineHeight:'48px'}],
        headingTwoMobile:['60px',{lineHeight:'65px'}],
        headingThreeMobile:['36px',{lineHeight:'39px'}],
        body:['24px', {lineHeight:'32px'}],
        bodyMobile:['18px', {lineHeight:'24px'}],
        button:['20px',{lineHeight:'28px'}],
        buttonMobile:['18px',{lineHeight:'28px'}],
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
