/// <reference types="Cypress" />

const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON  = 'input[name="submit"]'

class LoginPage {
    static visit() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage