const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // o 'media' o 'class'
  plugins: [
    nextui({
      prefix: "nextui", 
      addCommonColors: true,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      layout: {
        spacingUnit: "1rem",
        borderRadius: "8px", 
        containerMaxWidth: "1280px",
      },
      themes: {
        light: {
          layout: {
            spacingUnit: "1rem",
            borderRadius: "8px",
          },
          colors: {
            primary: "#0070F3",
            secondary: "#7928CA",
            success: "#17C964",
            warning: "#F5A623",
            error: "#E00",
            background: "#FFFFFF",
            foreground: "#000000",
          },
        },
        dark: {
          layout: {
            spacingUnit: "1rem",
            borderRadius: "8px",
          },
          colors: {
            primary: "#0070F3",
            secondary: "#7928CA",
            success: "#17C964",
            warning: "#F5A623",
            error: "#E00",
            background: "#000000",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
};