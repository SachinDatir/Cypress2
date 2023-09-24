describe('image validation',()=>{
    it('validate image',()=>{
        cy.visit('https://www.google.com/')
        cy.get('.lnXdpd').should('attr','src',"/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png")
    })
})