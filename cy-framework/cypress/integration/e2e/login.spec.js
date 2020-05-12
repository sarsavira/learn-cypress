import { url, login_username, login_password } from '../../../config'
import Navbar from '../../page-object/components/Navbar'
import LoginPage from '../../page-object/pages/LoginPage'

describe('Login Failed Test', function() {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('Should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password')
    })

    it('Should display error message', () => {
        LoginPage.displayErrorMessage()
    });
});


describe('Login Success Test', function() {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('Should login into application', () => {
        LoginPage.login(login_username, login_password)
    });
});
    
    