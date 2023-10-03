const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.BASE_URL,
    env: {
      apiUrl: process.env.BASE_URL,
      module_name: process.env.MODULE_NAME,
      asset_name: process.env.ASSET_NAME,
      userId: process.env.USERID,
      password: process.env.PASSWORD,
    },
    specPattern: "cypress/buopso"
  },
});
