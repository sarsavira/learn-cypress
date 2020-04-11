const pages = ['http://example.com']

const sizes = ["iphone-6", "ipad-2", [1200, 800]]

describe('Visual Regression', function() {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 4, 11)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            });
        })
    })
});
    

describe('Single Element Snapshot', function() {
    it('Should match a single element on the page', () => {
        cy.visit('http://example.com/')
        cy.get('h1').matchImageSnapshot()
    });
});
    