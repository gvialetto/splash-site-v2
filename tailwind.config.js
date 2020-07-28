module.exports = {
  purge: {
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    options: {
      // We generate those dynamically, so we need to whitelist
      // them here.
      whitelist: [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-600",
        "bg-purple-500",
        "bg-teal-400",
        "bg-orange-400",
        "fg-red-500",
        "fg-blue-500",
        "fg-green-600",
        "fg-purple-500",
        "fg-teal-400",
        "fg-orange-400",
      ],
    }
  },
  theme: {},
  variants: {},
  plugins: [],
};
