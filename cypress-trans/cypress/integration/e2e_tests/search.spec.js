
describe('Searchbox Test', function() {
    before(function() {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('should type into searchbox and submit viewth pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    });
});
    