///<reference types="cypress" />
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    })
    it('rahulshetty checkbox checked', () => {
        cy.get('input[type="checkbox"]').each((el) => {
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('rahulshetty checkbox unchecked', () => {
        cy.get('input[type="checkbox"]').each((el) => {
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    it.only('rahulshetty radiocheckbox ', () => {
        cy.get('[name="radioButton"]').first().check().should('be.checked')
        cy.get('[name="radioButton"]').eq(2).should('not.be.checked')
        cy.get('[name="radioButton"]').last().should('not.be.checked')
    })
})