/// <reference types="Cypress" />

const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_SELECTOR = '#subject'
const COMMENT_SELECTOR = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type("Fathur Rohim")
        cy.get(EMAIL_INPUT).type("trustoim@gmail.com")
        cy.get(SUBJECT_SELECTOR).type("Demo Test")
        cy.get(COMMENT_SELECTOR).type("Just a comment for demo test of automation test")
    }

    static submitFeedbackForm() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage