///<reference types="cypress" />

describe('VERIFY THE ORANGEhRM',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })
    it('TC01',()=>{
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get('input[class="oxd-input oxd-input--active"]').last().type('sachin')
    cy.get('div[class="oxd-select-wrapper"]').first().click().children().first('.oxd-select-text-input')
    cy.get('input[placeholder="Type for hints..."]').type('Skd')
    cy.get('div[class="oxd-select-wrapper"]').last().click().children().first('.oxd-select-text-input')
    cy.get('button[type="submit"]').click({force: true})
    })
})