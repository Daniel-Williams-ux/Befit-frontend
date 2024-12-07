/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: '#8C52FF',
        secColor: '#824DED1A',
        secColor2: '#082552',
        footColor: '#E15A5A',
        subtext: '#5E5B63',
        downloadColor: '#12141D',
        befitRed: '#E15A5A',
        careerColor: '#824DED',
        gridText: '#0C0A09',
        hireColor: '#AEB9CC',
        circleText: "#082552",
        circleColor: "#DED9F3",
        circlebg: "#F4F8FC",
        hybridColor: "#6C82A3",
        questionColor: "#0066F5",
        loginColor: "#E15A5A",
        formColor: "#0C0A09",
        helpColor: "#808080",
        inputBg: "#D4D4D4",
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],  // Adds DM Sans as the default sans font
        archivoSemi: ['"Archivo SemiExpanded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};