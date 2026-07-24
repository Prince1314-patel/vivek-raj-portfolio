/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Substrate — warm newsprint stock
        paper: "#F2ECD9",
        paperDeep: "#E7DBBB",
        sumi: "#181309", // key-line ink (warm near-black)
        // Risograph spot inks
        riso: {
          pink: "#EC2A78",
          blue: "#2340E0",
          yellow: "#FFD200",
          // multiply-overprint blends (the "blend everywhere" mechanism)
          teal: "#0FA98F", // blue + yellow
          orange: "#FF6A2B", // pink + yellow
          purple: "#6E2CC4", // pink + blue
        },
        // legacy tokens kept so any un-repainted node still resolves
        ink: "#181309",
        cream: "#F2ECD9",
        gold: "#EC2A78",
        muted: "#6b6455",
        mutedDark: "#4b4638",
        surface: "#E7DBBB",
        border: "#181309",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Impact", "sans-serif"],
        sans: ['"Familjen Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Overpass Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        poster: "-0.04em",
      },
      boxShadow: {
        pull: "6px 6px 0 0 #181309",
        pullPink: "6px 6px 0 0 #FF3D8B",
        pullBlue: "5px 5px 0 0 #2340E0",
      },
    },
  },
  plugins: [],
};
