class TyposPage {
  private url: string
  private header: string
  private expectedHeader: string
  private paragraphs: string
  private expectedInstructions: string
  private expectedMessage: string

  constructor() {
    this.url = '/typos'
    this.header = 'h3'
    this.expectedHeader = 'Typos'
    this.paragraphs = 'p' // first one is instructions, second one is the dynamic text
    this.expectedInstructions =
      'This example demonstrates a typo being introduced. It does it randomly on each page load.'
    this.expectedMessage = "Sometimes you'll see a typo, other times you won't."
  }

  /**
   * Visit the typos page
   */
  visit() {
    cy.visit(this.url)
  }

  /**
   * Assert we have a header
   */
  assertHeaderPresent() {
    cy.get(this.header).should('be.visible')
  }

  /**
   * Assert the header text is correct
   */
  assertHeaderTextIsCorrect() {
    cy.get(this.header).should('have.text', this.expectedHeader)
  }

  /**
   * Assert the instructions are present
   */
  assertInstructionsPresent() {
    // Get the first paragraph element and check its visible
    cy.get(this.paragraphs).eq(0).should('be.visible')
  }

  /**
   * Assert the instructions text is correct
   */
  assertInstructionsTextIsCorrect() {
    // get the first paragraph elements text
    cy.get(this.paragraphs)
      .eq(0)
      .invoke('text')
      .then((text) => {
        // Assert it matches what we expect
        expect(text).equal(this.expectedInstructions)
      })
  }

  /**
   * Assert we have a message
   */
  assertMessagePresent() {
    cy.get(this.paragraphs).eq(1).should('be.visible')
  }

  /**
   * Assert the message is what we expect
   */
  assertMessageTextIsCorrect() {
    // get the second paragraph elements text
    cy.get(this.paragraphs)
      .eq(1)
      .invoke('text')
      .then((text) => {
        expect(text.trim()).equal(this.expectedMessage.trim())
      })
  }

  /**
   * Assert the message is what we expect or reload the page and try again
   */
  assertMessageTextIsCorrectWithRetry(maxRetries: number) {
    let attempt = 0

    // Use an arrow function to capture the correct context
    const checkText = () => {
      // Get the text of the second paragraph element
      cy.get(this.paragraphs)
        .eq(1)
        .invoke('text')
        .then((text) => {
          cy.log(`We are on loop:${attempt}`)
          if (text.trim() === this.expectedMessage.trim()) {
            // If the text matches the expected message, no need to retry
            return
          } else if (attempt < maxRetries) {
            attempt++
            // Reload the page to retry
            cy.reload()
            // Retry by calling the function recursively
            checkText()
          } else {
            // After reaching max retries, make a final assertion
            // Compare the text with the expected message and assert
            expect(
              text.trim(),
              `After ${maxRetries} attempts we had ${text.trim()}`
            ).equal(this.expectedMessage.trim())
          }
        })
    }

    // Start the text verification by calling the checkText function; remember Cypress is async
    checkText()
  }
}

export { TyposPage }
