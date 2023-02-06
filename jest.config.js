module.exports = {
    name: "javascript-closures-and-scopes-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 0,
        branches: 0,
        lines: 0,
        functions: 0,
      },
    },
  };