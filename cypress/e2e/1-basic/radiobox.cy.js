///<reference types="cypress" />
import checkboxes from '../POm/radionExport'
let Boxes = new checkboxes()
describe('validate the checkbox functionality', () => {
    before(() => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it.skip('to verify the multiple check and unchecked', () => {
        Boxes.multipleCheck()
    })
    it.skip('verify the all  radio button with check() function', () => {
        cy.get('input[name="color"]').each((el) => {
            // cy.log(el)
            cy.wrap(el).as('radiobuttons')
            cy.get('@radiobuttons').check().should('be.checked')
        })
    })
    it.skip('verify the  one check box with checked() and unchecked() function', () => {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-3"]').click().should('not.be.checked')
    })

    it.skip('verify the  one check radio button with click() function', () => {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })
    it.only('check whether the particular element is disabled', () => {
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').click().should('be.checked')
        cy.get('#fruit-selects').children().eq(1).should('be.disabled')
        cy.get('#fruit-selects').select('Apple').should('have.value', 'apple')
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
    })
    it.skip('testcase', () => {
        cy.get('input[name="color"]').each((el, i) => {
            cy.wrap(el).check().should('be.checked')
        })
    })

})