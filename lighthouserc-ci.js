module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        "http://localhost:8080",
        "http://localhost:8080/about",
        "http://localhost:8080/service",
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
