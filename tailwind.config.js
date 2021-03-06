module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          styled: true,
          themes: true,
          base: true,
          utils: true,
          logs: true,
          rtl: false,
          prefix: "",
          darkTheme: "dark",
        },
      },
      // "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}