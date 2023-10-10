import { TyposPage } from '../pages/typosPage'

describe('Typos page tests', () => {
  // create instance of page object
  const typosPage = new TyposPage()

  it('Assert the typos page is correct - Flakey version', () => {
    // Go to the page
    typosPage.visit()

    // Assert the header is present
    typosPage.assertHeaderPresent()

    // Assert the header text is correct
    typosPage.assertHeaderTextIsCorrect()

    // Assert the instructions are present
    typosPage.assertInstructionsPresent()

    // Assert the instructions copy is correct
    typosPage.assertInstructionsTextIsCorrect()

    // Assert the message is present
    typosPage.assertMessagePresent()

    // Assert the message is correct - this dynamically changes on each reload so it will sometimes pass sometimes fail
    typosPage.assertMessageTextIsCorrect()
  })

  it('Assert the typos page is correct - with a retry', () => {
    // Go to the page
    typosPage.visit()

    // Assert the header is present
    typosPage.assertHeaderPresent()

    // Assert the header text is correct
    typosPage.assertHeaderTextIsCorrect()

    // Assert the instructions are present
    typosPage.assertInstructionsPresent()

    // Assert the instructions copy is correct
    typosPage.assertInstructionsTextIsCorrect()

    // Assert the message is present
    typosPage.assertMessagePresent()

    // Assert the message is correct - this dynamically changes on each reload so it will reload the page up to the number of attemps passed or until we get a match
    typosPage.assertMessageTextIsCorrectWithRetry(10)
  })
})
