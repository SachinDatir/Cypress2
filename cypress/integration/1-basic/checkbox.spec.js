///<reference types="cypress" />
describe('To check checkboxes and radioButtons functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('TC-01 By using check', () => {
        cy.get('input[type="checkbox"]').each((el) => {
            cy.wrap(el).check().should('be.checked')
        })

    })
    it('TC-02 By using check to mutiple checkboxes', () => {
        cy.get('input[type="checkbox"]').each((el) => {
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
    it.only('TC03 By using check for perticular', () => {
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="blue"]').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input[type="checkbox"]').last().check().should('be.checked')
    })
    it.only('TC-04 verify the functionality  to mutiple checkboxes', () => {
        cy.get('input[type="checkbox"]').check('yellow', 'blue', 'orange').should('be.checked')
        cy.get('input[type="checkbox"]').uncheck('yellow', 'blue', 'orange').should('not.be.checked')
    })
})