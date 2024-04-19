module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@braze/react-native-sdk|@firebase|firebase)"
  ],
  collectCoverageFrom: ["*/*.{js,jsx,ts,tsx}", "*/*.d.ts", "*/*.types.ts"],
  coverageThreshold: {
    global: {
      statements: 36.5,
      branches: 28,
      lines: 37,
      functions: 22.5
    }
  },
  fakeTimers: {
    enableGlobally: true,
    advanceTimers: true
  }
};
