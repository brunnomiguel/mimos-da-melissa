module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "http://localhost:3333/:slug*",
      },
    ];
  },
};
