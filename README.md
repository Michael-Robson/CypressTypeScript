# Cypress Test

Repository to renew and act as a portfolio of Cypress knowledge with examples running against the test app https://the-internet.herokuapp.com/

### How The Project Works

This project uses yarn to handle dependencies required and scripts needed to run the tests along with other useful scripts we might want to use for linting.

Scripts and dependencies can be found in `package.json`

### How The Cypress Tests Works

The Cypress framework uses the page object modal to make maintaining tests as easy as possible. The pages are stored in `cypress\pages`

Tests are stored in `cypress\e2e`

A HTML test report is generated after each run in `cypress\reports\testReports`

Custom commands that don't relate to a page object are added to `cypress\support\commands.js`

Global configuration, along with the before hooks is set in `cypress\support\e2e.js`

Reporter configraution and the base URL is set in `cypress.config.js`

### Scripts We Can Run

    yarn cypress:open - Opens the Cypress IDE
    yarn lint - Runs eslint check on all Cypress files
    yarn prettier:check - Reports on any formatting issues
    yarn format - Fixes any formatting issues
    yarn lint:fix - Fixes any linting issues
    yarn beforePR - Runs both lint and format fix jobs
    yarn allTestsChrome - Runs all the tests in headless chrome

### Dev Dependencies Used

- [cypress](https://www.cypress.io/) - The test framework
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter#readme) - Mochawesome reporter for Cypress with screenshots attached to tests
- [eslint](https://eslint.org/) - Finds and fixes problems in JavaScript code
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress#readme) - Adds Cypress rules to eslint
- [prettier](https://prettier.io/) - A code formatter
- [husky](https://typicode.github.io/husky/) - Improves commits by allowing you to run linting or tests before a push to a branch
- [lint-staged](https://github.com/okonet/lint-staged) - Runs linting before a commit, works in conjunction with husky

### Linting

Linting is the process of performing static analysis on source code to flag patterns that might cause errors or other problems. As an application progresses through the various stages of development, code quality becomes critical.

In this project we are linting with the Cypress recommended ruleset and also running Prettier to make sure all code is formated to the same standard.

Using husky and lint-staged I've created a pre-commit job in `.husky\pre-commit` which runs the lint-staged job found in `package.json`

     "lint-staged": {
        "*.{js,jsx,ts,tsx}": "yarn lint:fix",
       "*.{js,jsx,ts,tsx,scss,css,json,md}": "yarn format"
      },

This means whenever a git commit occures we are running the two lint tasks found in `package.json` that format all the code using eslint and then format all the code with prettier, if any issues can't be automatically fixed you will receive an error message and the commit won't be pushed.

#### Notes and further reading

- Useful for setting up eslint and prettier https://www.youtube.com/watch?v=St1YSNoB36Y&ab_channel=JustinBrooks
- uses lint-staged & husky to do pre commit checks https://www.npmjs.com/package/lint-staged & https://www.npmjs.com/package/husky
- in VS i have format on save turned on so prettier runs each time I save but this will mean on another persons computer it will run checks before a comit
- Page object model example with cypress https://www.browserstack.com/guide/cypress-page-object-model
- For reporting https://www.npmjs.com/package/cypress-mochawesome-reporter

TODO:
Add notes comment code!!
JS or TS?! stick to JS for now
cypress-xpath deprecated
https://www.reddit.com/r/QualityAssurance/comments/162wt3i/are_there_any_sites_i_can_use_to_write_automated/
