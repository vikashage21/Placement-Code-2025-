module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

  moduleFileExtensions: ["js", "jsx"],

  // ⬇️ Fix for CSS imports
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};
