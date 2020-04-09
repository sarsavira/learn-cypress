
describe('Payment Test', function() {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
    });

    it('Should send new payment (fake)', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type(500)
        cy.get('#sp_date').type('2020-06-26 {enter}')
        cy.get('#sp_description').type('Just a litle description')
        cy.get('#pay_saved_payees').click()
    });

    it('Should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.')
    });
});
    