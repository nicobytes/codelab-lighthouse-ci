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
      assertions: {
        'categories:performance': ['error', {minScore: .7}],
        'categories:accessibility': ['error', {minScore: .7}],
        'categories:best-practices': ['error', {minScore: .7}],
        'categories:seo': ['error', {minScore: .7}],
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
