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
        "text-red-500",
        "text-blue-500",
        "text-green-600",
        "text-purple-500",
        "text-teal-400",
        "text-orange-400",
      ],
    }
  },
  theme: {},
  variants: {},
  plugins: [],
};
