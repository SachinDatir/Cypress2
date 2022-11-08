///<reference types="cypress" />

describe('codenBox functionality',()=>{
    it('switch tab example',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
    })
})



// cy.get('#actions').invoke('removeAttr','target').click()