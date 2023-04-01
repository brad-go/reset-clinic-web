const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/**/*.styles.tsx',
    '!src/pages/**/*.ts(x)?',
    '!src/constants/**/*.ts',
    '!src/styles/**',
    '!src/types/**',
    '!**/*.d.ts',
    '!src/App.tsx',
    '!src/index.tsx',
  ],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  verbose: true,
};

module.exports = config;
