import TestFilters from '../../support/filterTest'

// TestFilters([], () => {
//     describe('Login to OrangeHRM website (E2E)', function () {
//         before(function () {
//             cy.visit('https://opensource-demo.orangehrmlive.com/')
//             cy.fixture('testdata').then(function (testdata) {
//                 this.testdata = testdata
//             })
//         })

//         it('validate the succcessful login', function () {
//             cy.get('input[placeholder="Username"]').type(this.testdata.username)
//             cy.get('input[placeholder="Password"]').type(this.testdata.password)
//             cy.get('button[type="submit"]').click()
//             cy.get('[alt="client brand banner"]').should('be.visible')
//         })
//     })
// })

TestFilters([],()=>{
    describe('login to ORANGEHRM website(E2E',function(){
        before(function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.fixture('testdata').then(function(testdata){
                this.testdata = testdata
            })
        })
        it('validate successful login',function(){
            cy.get('input[placeholder="Username"]').type(this.testdata.username)
            cy.get('input[placeholder="Password"]').type(this.testdata.password)
            cy.get('button[type="submit"]').click()
             cy.get('[alt="client brand banner"]').should('be.visible')
        })
    })
})
