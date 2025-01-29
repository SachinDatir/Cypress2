///<reference types="cypress" />
describe('verify the login functionality', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin', 'admin123')
    })
    it('TC1', () => {
        cy.get('ul[class="oxd-main-menu"]').children('li').each((el, i) => {
            cy.wrap(el.text())
           
        })
        
    })
})





//ul[class="oxd-main-menu"]