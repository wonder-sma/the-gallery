export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    'resources': 'usable'
  },
};
