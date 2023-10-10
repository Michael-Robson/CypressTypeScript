import { defineConfig } from 'cypress'

export default defineConfig({
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
    setupNodeEvents(on) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'https://the-internet.herokuapp.com/',
  },
})
