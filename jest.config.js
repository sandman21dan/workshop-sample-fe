module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/__test__/setupTests.js'],
  moduleNameMapper: {
    '^.+\\.(css|scss)': 'identity-obj-proxy',
  }
};
