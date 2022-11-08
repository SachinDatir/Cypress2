import TestFilters from '../../support/filterTest'

TestFilters([], () => {
    describe('Search for Google Wiki page from Wikipedia website (Smoke)', () => {
        before(() => {
            cy.visit('https://www.wikipedia.org/')
        })
        it('validate the page title', () => {
            cy.title().should('eq', 'Wikipedia')
        })
        it('Search for Google Wiki Page', () => {
            cy.get('#searchInput').type('google')
            cy.get('button[type="submit"]').click()
        })
        it('Validate Google Wiki Page has opened', () => {
            cy.get('h1#firstHeading').contains('Google')
        })
        it('Search for india on google Page', () => {
            cy.get('#simpleSearch').type('India')
            cy.get('#searchButton').click()
            cy.get('h1#firstHeading').contains('India')
        })
    })
})