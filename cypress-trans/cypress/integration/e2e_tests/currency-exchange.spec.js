
describe('Currency Exchange Test', function() {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
    })

    it('Should fill conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('JPY')
        cy.get('#pc_amount').type(1000)
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    });

    it('Should display conversion amount', () => {
        cy.get('#pc_conversion_amount').should('contain', '80385.85 yen (JPY) = 1000.00 U.S. dollar (USD)')
    });
})
    