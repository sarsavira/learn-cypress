
describe('Visual Regression Testing with percy nad cypress', function() {
    it('Should take percy snapshot', () => {
        cy.visit('https://www.example.com')
        cy.wait(1000)
        cy.percySnapshot()
    });
});
    