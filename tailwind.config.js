module.exports = {
  purge: {
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
    options: {
      // We generate those dynamically, so we need to whitelist
      // them here.
      safelist: [
        "bg-red-500",
        "bg-blue-400",
        "bg-green-600",
        "bg-purple-400",
        "bg-yellow-500",
        "text-red-500",
        "text-blue-400",
        "text-green-600",
        "text-purple-400",
      ],
    },
  },
  theme: {},
  variants: {},
  plugins: [],
};
