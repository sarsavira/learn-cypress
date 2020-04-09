
describe('Navbar Test', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('Should display online banking content', () => {
        cy.get('strong').contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('strong').contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.get('a').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
});
    