module.exports = {
  content: [
    "./packages/promise-theme/src/components/**/*.{html,js}",
    "./packages/promise-theme/src/processors/**/*.{html,js}"
  ],
  theme: {
    // fontSize: {
    //   "80": "80px",
    //   "64": "64px",
    //   "42": "42px",
    //   "36": "36px",
    //   "32": "32px",
    //   "30": "30px",
    //   "16": "16px",
    //   "14": "14px",
    // },
  	extend: {
  		spacing: {
        "layout": "calc( (100vw - 1024px + 3rem) / 2 )"
  		},
      maxWidth: {
        "layout": "1024px"
      },
      fontFamily: {
        "serif": ["ui-serif", "Georgia"],
        "sans": ["halyard-display", "sans-serif"],
      },
      fontWeight: {
        "reg": 400,
        "med": 500
      },
      fontSize: {
      	"80": ["80px", "1.2em"],
				"64": ["64px", "1.2em"],
        "60": ["60px", "1.2em"],
        "56": ["56px", "1.2em"],
        "50": ["50px", "1.2em"],
				"42": ["42px", "1.2em"],
				"36": ["36px", "1.2em"],
				"32": ["32px", "1.4em"],
				"30": ["30px", "1.4em"],
        "22": ["22px", "1.4em"],
        "20": ["20px", "1.4em"],
				"16": ["16px", "1.4em"],
				"14": ["14px", "1.4em"],
        "10": ["10px", "1.4em"],
      },
      colors: {
        "gray": "#737368",
        "gray-blue": "#465C69",
        "light-blue": "#F5FAFD",
        "med-blue": "#1C224F",
        "dark-blue": "#2A3A84",
        "ucla-blue": "#2674AC",
        "yellow": "#FFDF35",
      }
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/typography"),
    // require("tailwindcss-children"),
  ],
  corePlugins: {
    preflight: true,
  },
}