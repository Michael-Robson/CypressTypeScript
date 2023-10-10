import { HomePage } from '../pages/homePage'

describe('Fail on purpose', () => {
  const homePage = new HomePage()

  it('Fails to show off report', () => {
    homePage.visit()

    // Makes the test fail and display custom assert message
    assert.equal(
      1,
      2,
      'Fails on purpose to show what a failed test looks like in the test report'
    )
  })

  it('Another failure', () => {
    homePage.visit()
    cy.assertTextOnPage('This text is not present, it will make the test fail')
  })

  it('Pass to show off mix of test results in the report', () => {
    homePage.visit()

    // Makes the test fail and display custom assert message
    assert.equal(1, 1)
  })
})
