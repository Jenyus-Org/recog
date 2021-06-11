module.exports = {
  client: {
    includes: ["./{src,pages}/**/*.{js,jsx,ts,tsx}"],
    service: {
      name: "recog",
      url: "http://localhost:4000/graphql",
    },
  },
};
