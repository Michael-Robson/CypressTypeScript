class ForgotPasswordPage {
  constructor() {
    this.url = '/forgot_password'
    this.header = 'h2'
    this.expectedHeaderText = 'Forgot Password'
    this.emailLabel = "label[for='email']"
    this.expectedEmailLabel = 'E-mail'
    this.emailInput = 'input#email'
    this.submitButton = 'button#form_submit'
    this.submitButtonText = this.submitButton + ' i'
    this.expectedSubmitButtonText = 'Retrieve password'
    this.apiRequest = 'https://the-internet.herokuapp.com/forgot_password'
  }

  /**
   * Visit the page
   */
  visit() {
    cy.visit(this.url)
  }

  /**
   * Assert the header is present
   */
  assertHeaderPresent() {
    cy.get(this.header).should('be.visible')
  }

  /**
   * Assert the header text is correct
   */
  assertHeaderTextCorrect() {
    cy.get(this.header).should('have.text', this.expectedHeaderText)
  }

  /**
   * Assert the email label is present
   */
  assertEmailLabelPresent() {
    cy.get(this.emailLabel).should('be.visible')
  }

  /**
   * Assert the email label text is correct
   */
  assertEmailLabelTextCorrect() {
    cy.get(this.emailLabel).should('have.text', this.expectedEmailLabel)
  }

  /**
   * Assert the email input field is present
   */
  assertEmailInputPresent() {
    cy.get(this.emailInput).should('be.visible')
  }

  /**
   * Types the given value in the email field
   * @param {any} text to enter into the field
   */
  setEmail(text) {
    cy.get(this.emailInput).type(text)
  }

  /**
   * Returns the value currently displayed in the email input field
   * @returns The value in the field
   */
  getEmail() {
    return cy
      .get(this.emailInput)
      .invoke('val')
      .then(($value) => {
        return $value
      })
  }

  /**
   * Asserts the submit button is present
   */
  assertSubmitButtonPresent() {
    cy.get(this.submitButton).should('be.visible')
  }

  /**
   * Asserts the submit button text is correct
   */
  assertSubmitButtnTextCorrect() {
    cy.get(this.submitButtonText).should(
      'have.text',
      this.expectedSubmitButtonText
    )
  }

  /**
   * Clicks the submit button
   */
  clickSubmitButton() {
    cy.get(this.submitButton).click()
  }
}

export { ForgotPasswordPage }
