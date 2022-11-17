///<reference types="cypress" />

describe('reload functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    })
    it.skip('reload the current page', () => {
        cy.contains('Images').click()
        cy.reload()
        cy.go(-1)
        cy.wait(2000)
        cy.get('[class="k1zIA rSk4se"]').find('img').should('be.visible')
    })

    it('dynamic dropdown', () => {
        cy.get('[type="text"]').type('cypress', { force: true })
        // cy.get('.erkvQe li span').find('li span').contains('cypress automation').click({force:true})
        cy.get('.erkvQe li span').contains('cypress automation').click({ force: true })
    })
})