module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      chromePath: '/usr/bin/google-chrome',
			url: [
				'http://localhost:8080',
				'http://localhost:8080/about',
				'http://localhost:8080/service'
			],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};