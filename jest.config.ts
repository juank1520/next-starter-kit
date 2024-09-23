import type { Config } from "jest";

import nextJest from "next/jest";

const createNextConfig = nextJest({
  dir: "./",
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./.storybook",
    // "./src/**.stories.ts",
  ],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  slowTestThreshold: 2,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  setupFiles: ["./jest.polyfills.js"],
};

export default createNextConfig(config);
