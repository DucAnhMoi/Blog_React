module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        app: "72rem",
      },
      spacing: {
        nav: "5rem",
      },
      fontFamily: {
        indieFlo: ['"Indie Flower"', "sans-serif"],
      },
      colors: {
        mainColor1: "rgb(62, 89, 209)",
        mainColor2: "rgb(155, 202, 27)",
        mainColor3: "rgb(238, 46, 46)",
        mainColor4: "rgb(55, 238, 95)",
        textColor: "#666",
      },
    },
  },
  plugins: [],
};
