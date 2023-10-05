const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Buopso-api-Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false
  },
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
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
