///<reference types="cypress" />
import TestFilters from '../../support/filterTest'
TestFilters([],()=>{
    describe('Test to demonstrate testing of iframes in Cypress',()=>{
        const getIframe=(id)=>{
         return cy.get(`${id}`).its('0.contentDocument.body').then(cy.wrap)
        }
        before(()=>{
            cy.visit('http://the-internet.herokuapp.com/iframe')
        })
        it('Input text in the text editor which is inside an iframe',()=>{
            getIframe('#mce_0_ifr').clear().type('This is a test description.')         
        })
    })
})