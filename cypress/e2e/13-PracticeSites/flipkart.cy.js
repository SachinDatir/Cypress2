///<reference types="cypress" />
import GenericMethod from "../PomExport/generic";
import CSSselector from "../PomExport/selector";

let obj2 = new CSSselector()

describe('flipcart functionality', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('Add to cart', () => {
        GenericMethod.visitURL(obj2.selectElement.FlipcartSite)
        GenericMethod.EnterVal(obj2.selectElement.searchFLIPElement, 'Iphone13')
        GenericMethod.ClickE(obj2.selectElement.searchFLIPButton)
        GenericMethod.clickMobile(obj2.selectElement.MobileCLICK)
        GenericMethod.PinCode(obj2.selectElement.pincode, '422605')
        GenericMethod.ClickE(obj2.selectElement.checkPin)
        cy.get('._2AQydx').last().find('input').should('have.attr', 'readonly')
        // cy.get('div[class="_2wKoSe"]').last().children('div').find('button').click({force:true})
        cy.get('div[class="_2wKoSe"]>div>button').click({ force: true })
        cy.get('[class="CXW8mj"]>img').first().should('be.visible')
        cy.get('[class="_3s5O6i"]').should('have.text', 'You will save ₹5,961 on this order')
    })
})