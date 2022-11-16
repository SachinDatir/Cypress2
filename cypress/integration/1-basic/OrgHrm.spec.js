///<reference types="cypress" />
describe('to verify the login functionality of orgHRM form', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin', 'admin123')
    })
    // it('TC1 login details',()=>{
    //     cy.login('Admin', 'admin123')
    // })

    it.skip('TC01 to verify the dashboard', () => {
        cy.get('img[alt="client brand banner"]').should('be.visible')
        cy.get('h6[class]').should('have.text', 'PIM')
    })
    it('tc02 add employee', () => {
        cy.get('a[href="#"]').eq(1).click()
        cy.get('input[placeholder="First Name"]').type('sachin')
        cy.get('input[placeholder="Middle Name"]').type('vitthal')
        cy.get('input[placeholder="Last Name"]').type('datir')
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1)
        cy.get('button[type="submit"]').click()
        cy.url().should('contain', 'viewPersonalDetails')
    })
    // it('add personal details', () => {
    //     cy.url().should('contain', 'viewPersonalDetails')
    // })
})

