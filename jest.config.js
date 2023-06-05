module.exports = {
    name: "javascript-closures-and-scopes-kata",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 77,
        branches: 50,
        lines: 77,
        functions: 81,
      },
    },
  };