module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dawn: "#FAF4E8",
        ocean: "#114B5F",
        sun: "#D97706",
        mint: "#5F9EA0",
        slate: "#2F3E46"
      },
      fontFamily: {
        heading: ["Bree Serif", "serif"],
        body: ["Nunito Sans", "sans-serif"]
      },
      boxShadow: {
        lesson: "0 20px 35px -20px rgba(17, 75, 95, 0.45)"
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        riseIn: "riseIn 0.5s ease-out forwards"
      }
    }
  },
  plugins: []
};
