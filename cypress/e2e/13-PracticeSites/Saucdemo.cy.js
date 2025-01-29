import sauce from '../../fixtures/sauce.json'
describe('TO check the Saucdemo site functionality', () => {
    it('TC01 verify with valid credentials', () => {
        cy.intercept({
            method: "GET",
            url: "**/**"
        }).as('SwagLab')
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(sauce.username)
        cy.get("#password").type(sauce.password)
        cy.get('#login-button').click()
        cy.wait('@SwagLab')
        cy.get('.title').should('have.text', 'Products')
    })
})