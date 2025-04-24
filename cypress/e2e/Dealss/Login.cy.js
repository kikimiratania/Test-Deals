
describe('Login ', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    })
    it('Login', () => {
      cy.get('#dealls-navbar-login-btn').click(); 
      cy.get('input[placeholder="Enter your email"]').type('akak@gmail.com');
      cy.get('input[placeholder="Enter your password"]').type('Paswword');
      cy.get('input[type="submit"]')
      
      })

})