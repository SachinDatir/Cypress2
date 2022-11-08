///<reference types="cypress" />
import TestFilters from '../../support/filterTest'
//TestFilters([], () => {
    describe('verify the iframe functionality', () => {
        beforeEach(() => {
            cy.visit('http://the-internet.herokuapp.com/iframe')
        })

        it('verify iframe by jquery', () => {
            cy.get('#mce_0_ifr').then(($el) => {
                cy.log($el)
               let body = $el.contents().find('body')
               cy.wrap(body).as('bdy')
               cy.get('@bdy').find('p').should('have.text','Your content goes here.')
            })
        })
       

    })
//})

