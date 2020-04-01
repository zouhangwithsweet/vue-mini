'use strict'

module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
  },
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
  // CoverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.ts'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'node',
}
