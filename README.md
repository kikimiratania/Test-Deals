 Dealss Test:
 start:
1. Install dependencies: npm install
2. Open Cypress Test Runner: npx cypress open
3. Open Register.cy.js of if you have account u run login.cy.js
4. Open
 Mentoring.cy.js


project-root/
├── cypress/
│   ├── e2e/                # Test cases
│   ├── fixtures/           # Test data
│   ├── support/            # Commands & config
│   ├── screenshots/        # Auto screenshots
│   ├── videos/             # Auto video recordings
├── cypress.config.js       # Cypress config
├── package.json
└── README.md


 Features
✅ End-to-End testing using Cypress


example test:
/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Register ', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
  })
