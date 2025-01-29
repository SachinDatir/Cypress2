///<reference types="cypress" />


describe('Alert(),confirm(),prompt()', () => {
    Cypress.on('uncaught:exception', (err, Runnable) => {
        return false
    })
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it.skip('verify the normal js alerts()', () => {
        cy.on('window:alerts', (win) => {
            // cy.log(win)
            expect(win).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it.skip('verify js confirm()-ok', () => {
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.eql('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    //  click on cancel button
    it.skip('verify js confirm()-cancel', () => {
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.eql('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it.skip('verify js prompt()-ok', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('i am learning Cypress')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: i am learning Cypress')
    })

    // click on cancel button
    it('verify js prompt()--cancel', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text', 'You entered: null')
    })
})

// https://the-internet.herokuapp.com/javascript_alerts