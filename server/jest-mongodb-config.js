module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: 'v4.4-latest', // Version of MongoDB
      skipMD5: true
    },
    autoStart: false
  }
};
