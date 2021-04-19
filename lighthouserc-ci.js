module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
      url: [
        'http://127.0.0.1:8080/',
        'http://127.0.0.1:8080/about',
        'http://127.0.0.1:8080/service'
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: .6}],
        'categories:accessibility': ['error', {minScore: .6}],
        'categories:best-practices': ['error', {minScore: .6}],
        'categories:seo': ['error', {minScore: .6}],
				'categories.pwa': 'off',
      }
    },
    upload: {
      target: "temporary-public-storage",
    }
  }
}