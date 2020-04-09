
describe('Find Transaction Test', function() {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
    })

    it('Should Filter transactions', () => {
        cy.get('a').contains('Account Activity').click()
        cy.get('a').contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('100')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button').contains('Find').click()
    });

    it('Should display results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    });
});
    