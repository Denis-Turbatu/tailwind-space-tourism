/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        // HOME
        "home-mobile":
          "url('../image/background-home-mobile.jpg')",
        "home-tablet":
          "url('../image/background-home-tablet.jpg')",
        "home-desktop":
          "url('../image/background-home-desktop.jpg')",
        // DESTINATION
        "destination-mobile":
          "url('../image/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('../image/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('../image/background-destination-desktop.jpg')",
        // CREW
        "crew-mobile":
          "url('../image/background-crew-mobile.jpg')",
        "crew-tablet":
          "url('../image/background-crew-tablet.jpg')",
        "crew-desktop":
          "url('../image/background-crew-desktop.jpg')"
      }
    }
  },
  plugins: []
};
