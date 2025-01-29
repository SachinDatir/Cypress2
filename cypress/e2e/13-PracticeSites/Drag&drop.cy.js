///<reference types="cypress" />
describe('validate static drag&drop', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://demo.automationtesting.in/Static.html')
    })
    it('TC-01 static drag and drop', () => {
        let dataTransfer = new DataTransfer()
        cy.get('#mongo').trigger('dragstart', { dataTransfer })
        cy.get('#droparea').trigger('drop', { dataTransfer })
        cy.get('#mongo').trigger('dragend', { dataTransfer })
    })

    it.skip('TC-02 static drag and drop', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        let dataTransfer = new DataTransfer()
        cy.get('#angular').trigger('dragstart', { dataTransfer })
        cy.get('#droparea').trigger('drop', { dataTransfer })
        cy.get('#angular').trigger('dragend', { dataTransfer })
        // // cy.get('#mongo').should('be.visible')
        // cy.get('#angular').should('be.visible')
        // cy.get('#node').should('be.visible')
        cy.get('div[class="col-xs-10 col-xs-offset-2"]').should('have.length',2)
      
    })

    it.skip('TC03',()=>{
        let dataTransfer = new DataTransfer()
        cy.get('#mongo').trigger('dragstart', { dataTransfer })
        cy.get('#droparea').trigger('drop', { dataTransfer })
        cy.get('#mongo').trigger('dragend', { dataTransfer })
    })

})