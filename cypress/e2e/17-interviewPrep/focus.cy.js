describe('validate the score from scorecard', () => {
    it('scorecard', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').focus().should('be.focused')
    //   cy.blur() can only be called on the focused element
      cy.get('[name="usename"]').blur().should('not.be.focused')

    })
})