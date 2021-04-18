### Install the Lighthouse CI CLI

```bash
sudo npm install -g @lhci/cli
lhci --version
```

### Create file

```js
// ./lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 1,
      url: [
        'http://localhost:8080',
        'http://localhost:8080/about',
        'http://localhost:8080/service',
      ],
      chromePath: '/usr/bin/google-chrome',
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

// run lhci autorun
```

Set up a GitHub Action to run Lighthouse CI

---

```bash
mkdir .github
mkdir .github/workflows
touch .github/workflows/lighthouse-ci.yaml
```

```yaml
name: Lighthouse CI
on: [push]
jobs:
  lhci:
    name: Lighthouse CI
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: Install dependencies
        run: npm install
      - name: run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.7.x
          lhci autorun --config=./lighthouserc-ci.js
# See Repo GithubActions
```

```js
// ./lighthouserc-ci

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
        'categories:performance': ['error', {minScore: .6}],
        'categories:accessibility': ['error', {minScore: .6}],
        'categories:best-practices': ['error', {minScore: .6}],
        'categories:seo': ['error', {minScore: .6}],
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
```