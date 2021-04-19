module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 1,
      url: [
        'http://127.0.0.1:8080/',
        'http://127.0.0.1:8080/about',
        'http://127.0.0.1:8080/service'
      ],
      chromePath: '/usr/bin/google-chrome', // WSL
    },
    upload: {
      target: "temporary-public-storage",
    }
  }
}