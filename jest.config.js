module.exports = {
  name: "javascript-closures-and-scopes-kata",
  verbose: false,
  testMatch: ["**/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 82,
      branches: 66,
      lines: 82,
      functions: 88,
    },
  },
};
