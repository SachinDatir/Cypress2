describe('Invoke method in cypress',()=>{
    it('invoke',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').invoke('text').should('contain','CONTACT US')
        cy.get('.section_header').invoke('attr','name').should('contain','contactme')
    })
})