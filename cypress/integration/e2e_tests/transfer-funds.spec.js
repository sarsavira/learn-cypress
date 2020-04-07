
describe('Transfer Fund verification test', function() {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
    })

    it('Should fill transfer funds form', () => {
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('6')
        cy.get('#tf_amount').type(1000)
        cy.get('#tf_description').type('Just a description')
        cy.contains('Continue').click()
    });

    it('Should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Brokerage')
        cy.get('#tf_amount').should('have.value', '1000')
        cy.get('#tf_description').should('have.value', 'Just a description')
    });
});
    