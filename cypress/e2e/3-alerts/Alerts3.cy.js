///<reference types="cypress" />
describe('Alerts, confirm , prompt', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('verify the normal js alert', () => {
        cy.on('window:alert', (win) => {
            expect(win).to.equal('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('verify the confirm()', () => {
        cy.on('window:confirm', (win) => {
            expect(win).to.equal('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('verify the confirm() cancel', () => {
        cy.on('window:confirm', (win) => {
            expect(win).to.equal('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('verify the prompt()', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('i am learning alerts in cypress')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: i am learning alerts in cypress')

    })

    it('verify the alerts()', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'alert').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it('verify the confirm()', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it.only('verify the confirm()', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })
})