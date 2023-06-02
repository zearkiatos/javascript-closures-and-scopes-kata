module.exports = {
    name: "javascript-closures-and-scopes-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 60,
        branches: 50,
        lines: 60,
        functions: 60,
      },
    },
  };