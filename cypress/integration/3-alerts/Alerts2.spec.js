///<reference types="cypress" />

describe('Alerts(),confirm(),prompt()', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return true
    })
    beforeEach(() => {
        cy.visit('https://www.way2automation.com/way2auto_jquery/alert.php#load_box')
    })

    it('verify the normal js alerts', () => {
        cy.get('[src="alert/simple-alert.html"]').then((el) => {
            // cy.log(el.text())
            let body = el.contents().find('body')
            // cy.log(body)
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('button').click('{enter}')
        })
    })
})
