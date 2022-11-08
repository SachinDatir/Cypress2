///<reference types="cypress" />
import GenericMethod from "../PomExport/generic";
import CSSselector from "../PomExport/selector";
let obj1 = new CSSselector()

describe('amazon.com', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('amazon functionality', () => {
        GenericMethod.visitURL(obj1.selectElement.AmazonSite)
        GenericMethod.EnterVal(obj1.selectElement.searchElement, 'samsung M32')
        GenericMethod.ClickE(obj1.selectElement.searchButton)
        GenericMethod.clickMobile(obj1.selectElement.mobileClick)
        cy.get('#mbb-offeringID-1').click().should('be.checked')
        GenericMethod.AddtoCart(obj1.selectElement.addTOcart)
        GenericMethod.Cart(obj1.selectElement.cartButton)
       
        
        
    })
})