module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
      url: [
        'http://localhost:8080',
        'http://localhost:8080/about',
        'http://localhost:8080/service',
      ],
      // chromePath: '/usr/bin/google-chrome',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', {minScore: .9}],
        'categories:accessibility': ['error', {minScore: .9}],
        'categories:best-practices': ['error', {minScore: .9}],
        'categories:seo': ['error', {minScore: .9}],
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
