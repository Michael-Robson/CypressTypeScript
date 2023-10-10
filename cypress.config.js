const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/testReports',
    charts: true,
    reportPageTitle: 'Cypress E2E Suite',
    inline: true,
    inlineAssets: true,
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'https://the-internet.herokuapp.com/',
  },
})
