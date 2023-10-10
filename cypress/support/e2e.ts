/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import the Cypress mochawesome reporter
import 'cypress-mochawesome-reporter/register'

// Anything in here runs before every spec file
beforeEach(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()

  /* Adds a cookie with the spec file path, this can be useful if a automated test generates an alert
   on a dashboard such as kibana, we will have a cookie pointing to the test that caused it
  */
  cy.setCookie('AutomatedTest:', Cypress.spec.relative)
})

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to assert the href attribute of an element.
       * @param {JQuery<HTMLElement>} element - The element to assert the href attribute for.
       * @param {string} expectedURL - The expected URL value.
       * @example cy.assertLinkURL(element, 'https://example.com')
       */
      assertLinkURL(
        element: JQuery<HTMLElement>,
        expectedURL: string
      ): Chainable<void>

      /**
       * Custom command to assert that expected text is present on the page.
       * @param {string} expectedText - The expected text to be present on the page.
       * @example cy.assertTextOnPage('Welcome to Cypress')
       */
      assertTextOnPage(expectedText: string): Chainable<void>

      /**
       * Custom command to look for a link with the passed-in text value and click it.
       * @param {string} linkText - The text value of the link to click.
       * @example cy.clickLinkByText('Learn More')
       */
      clickLinkByText(linkText: string): Chainable<void>

      /**
       * Custom command to assert that the current page URL matches the passed-in value.
       * @param {string} expectedURL - The expected URL value.
       * @example cy.assertPageURL('/home')
       */
      assertPageURL(expectedURL: string): Chainable<void>
    }
  }
}
