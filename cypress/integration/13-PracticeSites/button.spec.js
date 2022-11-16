///<reference types="cypress" />
describe('', () => {
    it.skip('', () => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get('input[name="browser"]').first().check().should('be.checked')
        cy.get('input[name="browser"]').first().check().should('have.attr', 'checked').then((el) => {
            cy.wrap(el).should('have.attr', 'checked')
        })

    })


    // 1)Get parent element
    // 2) .find (input [checked])
    // 3).should ('be.checked'
    // If we are trying to check already  checked redio button then print redio button alredy checked
    it('', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons-selected-disabled').find('input[checked]').should('be.checked')
    })
})