import { HomePage } from '../pages/homePage'
import { ForgotPasswordPage } from '../pages/forgotPasswordPage'

describe('Forgot password tests', () => {
  // Create instance of pages
  const homePage = new HomePage()
  const forgotPasswordPage = new ForgotPasswordPage()

  it('Navigate to forgot password screen via homepage', () => {
    // Visit the home page
    homePage.visit()

    // Click link by text - custom command
    cy.clickLinkByText('Forgot Password')

    // Assert we are on the correct URL
    cy.assertPageURL(forgotPasswordPage.url)
  })

  it('Assert forgot password screen looks correct', () => {
    // Go direct to the forgot password page
    forgotPasswordPage.visit()

    // Assert the header is present
    forgotPasswordPage.assertHeaderPresent()

    // Assert the text is correct
    forgotPasswordPage.assertHeaderTextCorrect()

    // Assert the email label is present
    forgotPasswordPage.assertEmailLabelPresent()

    // Assert the email label is correct
    forgotPasswordPage.assertEmailLabelTextCorrect()

    // Assert the email input field is present
    forgotPasswordPage.assertEmailInputPresent()

    // Assert the email field is empty
    let emailField

    // getEmail() returns the value but Cypress is async so we use then (like await) to make sure we have a value before moving on
    forgotPasswordPage.getEmail().then((emailValue) => {
      emailField = emailValue
      cy.log('The email value is: ' + emailField)
      expect(emailField).to.be.empty
    })

    // Set the email field
    const emailUsed = 'hello@world.com'
    forgotPasswordPage.setEmail(emailUsed)

    // Assert the email field now contains the email we typed
    forgotPasswordPage.getEmail().then((emailValue) => {
      emailField = emailValue
      cy.log('The email value is: ' + emailField)
      expect(emailField).to.equal(emailUsed)
    })

    // Assert the submit button is present
    forgotPasswordPage.assertSubmitButtonPresent()

    // Assert the submit button text is correct
    forgotPasswordPage.assertSubmitButtnTextCorrect()
  })

  it('Submit a request and check the API returns a 500', () => {
    // Go direct to the forgot password page
    forgotPasswordPage.visit()

    // Enter an email
    const emailUsed = 'hello@world.com'
    forgotPasswordPage.setEmail(emailUsed)

    // Prepare to intercept the API response that will happen after I submit the form
    cy.intercept(forgotPasswordPage.apiRequest).as('apiCall')

    // Submit the form
    forgotPasswordPage.clickSubmitButton()

    // Wait for the api call to fire
    cy.wait('@apiCall').then((interception) => {
      // Get the entire response
      const apiResponse = interception.response

      // Get the API response code
      const statusCode = apiResponse.statusCode

      // Log them to IDE
      cy.log(apiResponse)
      cy.log(statusCode)

      // We know the API doesn't work yet so expect a 500
      expect(statusCode).to.equal(500)
    })
  })
})
