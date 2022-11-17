///<reference types="cypress" />

describe('mouseover functionality in cypress',()=>{
    it('MouseOver',()=>{
        cy.visit('https://www.spicejet.com/')
        cy.contains('SpiceClub',{force:true}).first().trigger('mouseover')
        cy.contains('OurProgram',{force:true}).trigger('mouseover')
    })
})