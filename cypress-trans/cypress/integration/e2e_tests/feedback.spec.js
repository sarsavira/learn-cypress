
describe('Feedback Test', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('strong').contains('Feedback').click()
    })

    it('Should load feedback form', () => {
        cy.get('form').should('be.visible')
    });

    it('Should fill feedback form', () => {
        cy.get('input[placeholder="Your Name"]').type('Fathur Rohim')
        cy.get('input[placeholder="Your email address"]').type('trustoim@gmail.com')
        cy.get('input[placeholder="Subject"]').type('Learning Cypress')
        cy.get('textarea[name="comment"]').type('I love cypress. Because, cypress is the beautifull automate test for end to end')
    });

    it('should submit feedback form', () => {
        cy.get('input[value="Send Message"]').click()
    });

    it('should display feedback message', () => {
        cy.get('#feedback-title').should('contain', 'Feedback')
    });
});
    