module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: [
        "http://localhost:8080",
        "http://localhost:8080/about",
        "http://localhost:8080/service",
      ],
      numberOfRuns: 1,
      chromePath: "/usr/bin/google-chrome",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
