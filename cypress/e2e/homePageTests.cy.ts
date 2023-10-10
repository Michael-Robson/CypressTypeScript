import { HomePage } from '../pages/homePage'

describe('Home page tests', () => {
  // create instance of the home page page object
  const homePage = new HomePage()

  // Load the home page
  beforeEach(() => {
    homePage.visit()
  })

  it('Assert the home page looks correct', () => {
    // Assert the page header is present
    homePage.assertHeaderPresent()

    // Assert the page header text is correct
    homePage.assertHeaderText('Welcome to the-internet')

    // Assert the subheading is present
    homePage.assertSubheadingPresent()

    // Assert the subheading text is correct
    homePage.assertSubheadingText('Available Examples')

    // Assert we have the correct number of example links
    homePage.assertNumberOfLinks(44)
  })

  it('Assert the example links are correct', () => {
    // Read the list of links from a fixture file and asserts they are all present with the correct href
    homePage.assertLinksAreCorrect()
  })

  it('Assert footer text on page', () => {
    // Simple test using a custom command to assert some text is on the page
    // in a real like scenario you wouldn't do it like this
    cy.assertTextOnPage('Powered by Elemental Selenium')
  })
})
