
describe('Password Test', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('Should click on the signin button', () => {
        cy.get('#signin_button').click()
    });

    it('Should click on the forgotten password', () => {
        cy.get('.offset3 > a').should('contain', 'Forgot your password ?').click()
    });

    it('Should fill email form', () => {
        cy.get('#user_email').type('test.email@email.com')
    });

    it('Should submit the form', () => {
        cy.get('input[name="submit"]').should('contain.value', 'Send Password').click()
    });
});
    