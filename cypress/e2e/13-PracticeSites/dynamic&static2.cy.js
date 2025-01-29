describe('Dynamic dropdown',()=>{
    it('tC01',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('isra')
        cy.get('.ui-menu-item').each((el)=>{
            if(el.text()=='Israel'){
                cy.wrap(el).click()
            }
        })
        cy.get('#autocomplete').should('have.length',1)
    })
})