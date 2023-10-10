class HomePage {
  constructor() {
    this.url = '/'
    this.header = "h1[class='heading']"
    this.subheading = 'h2'
    this.allLinks = 'ul li a'
  }

  /**
   * Navigates to the home page
   */
  visit() {
    cy.visit(this.url)
  }

  /**
   * Asserts the header is visible on the screen
   */
  assertHeaderPresent() {
    cy.get(this.header).should('be.visible')
  }

  /**
   * Assert the header text is the same as the passed value
   * @param {*} expected The value we expect the header to have
   */
  assertHeaderText(expected) {
    cy.get(this.header).should('have.text', expected)
  }

  /**
   * Asserts the subheading is visible on the screen
   */
  assertSubheadingPresent() {
    cy.get(this.subheading).should('be.visible')
  }

  /**
   * Assert the subheading text is the same as the passed value
   * @param {*} expected The value we expect the subheading to have
   */
  assertSubheadingText(expected) {
    // A different way to assertHeaderText by storing the text then comparing it to passed value
    cy.get(this.subheading).should(($subHeader) => {
      const text = $subHeader.text()
      expect(text).to.equal(expected)
    })
  }

  /**
   * Assert we have the expected number of links on the page
   * @param {*} expected Number of links to expect
   */
  assertNumberOfLinks(expected) {
    cy.get(this.allLinks).should('have.length', expected)
  }

  /**
   * Reads the list of links from the homePageLinks.json fixture
   * Loops through each link and checks we have a link on the page with that text and href
   */
  assertLinksAreCorrect() {
    /* Read the homePageLinks.json file from the fixtures folder
    / The json file is an array of objects where each object contains two properties
    / a text value represents the link text
    / a href value represents the href url value 
    */
    cy.fixture('homePageLinks').then((links) => {
      // Loop through each link in the json file
      for (var index in links) {
        cy.log('LINK IS ' + links[index].text)
        cy.log('HREF IS ' + links[index].href)
        cy.contains(links[index].text).should(
          'have.attr',
          'href',
          links[index].href
        )
      }
    })
  }
}

export { HomePage }
