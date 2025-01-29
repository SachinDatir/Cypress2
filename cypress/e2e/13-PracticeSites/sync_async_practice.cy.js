//  IN cypress commands are executed asynchronously
//  But the cypress code exectution is syncronous in nature
//  Problem => is that when we include js code in ous spec file , cypress code (Synchronous in nature) execution
//  get break and js code get executed before cypress code to avoid this problem we use  .then command 
//  inside .then command we write our cypress code 

describe('OrangeHRM', () => {
    it('login with valid crendentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-input').first().type('Admin')
        cy.get('.oxd-input').last().type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('.employee-image').should('be.visible')
        console.log('Hello')
    })

    it('login with invalid crendentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-input').first().type('admin')
        cy.get('.oxd-input').last().type('Admin123')
        cy.get('[type="submit"]').click()
        cy.get('[alt="company-branding"]').should('be.visible')
        .then(()=>{
            cy.log('hello')
        })
    })
})