
describe('Login / logout test', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.login("invalid login", "invalid password")
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })

        cy.get('ul.nav-tabs').should('be.visible')
    });

    it('Should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    });
});
    