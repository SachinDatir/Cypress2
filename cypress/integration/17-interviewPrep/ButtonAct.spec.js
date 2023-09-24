describe('Button Action',()=>{
  it('TC -01',()=>{
    cy.visit('https://demoqa.com/buttons')
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')
    cy.wait(1000)
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
  })

  it('verify the text input and text area',()=>{
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').clear().type('sachin Datir')
    cy.get('#userEmail').type('skd@gmail.com')
    cy.get('#currentAddress').type('pune')
    cy.xpath('//textarea[@id="permanentAddress"]').type('Sangamner')
  })
})