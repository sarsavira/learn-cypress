
describe('New Payee Test', function() {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
    });
    
    it('Should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name').should('have.value', 'Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('3456545678').should('have.value', '3456545678')
        cy.get('#np_new_payee_details').type('Detail').should('have.value', 'Detail')
        cy.get('#add_new_payee').click()
    });

    it('Should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.')
    });
});