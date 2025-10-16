const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-sm": "715px",
        "custom-md": "875px",
        "custom-lg": "1200px",
        "custom-1050": "1050px",
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        moveLine: "moveLine 8s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        moveLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
  },
  darkMode: "class", // o 'media' o 'class'
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
            primary: "#5b21b6",
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
            primary: "#5b21b6",
            secondary: "#5b21b6",
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
