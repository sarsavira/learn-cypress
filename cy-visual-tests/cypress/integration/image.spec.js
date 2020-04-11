const pages = ['http://example.com']

const sizes = ["iphone-6", "ipad-2", [1200, 800]]

describe('Visual Regression', function() {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            });
        })
    })
});
    