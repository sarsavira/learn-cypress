
describe('Visual Regression - Data Tables', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click()
    })

    it('Should load account activity', () => {
        cy.get('#account_activity_tab').click()
    });

    it('Data Table Snapshot', () => {
        cy.matchImageSnapshot()
    });
});
    