///<reference types="cypress" />
describe('Goibibo functionality', () => {
    // beforeEach(() => {
    //     cy.visit('https://www.goibibo.com/')
    // })



    it('TC01', () => {
        let DATE = new Date()
        DATE.setDate(DATE.getDate() + 27)
        let date = DATE.getDate()
        let month = DATE.getDate()
        let year = DATE.getFullYear()
        let Month = DATE.toLocaleString('default', { month: 'long' })
        cy.log(date)
        cy.log(Month)
        cy.log(year)

        cy.visit('https://www.goibibo.com/')
        cy.get('.elvOMS').eq(2).then((el)=>{
            
        })

        function getFullYear(){
         
            // cy.get('div[class="DayPicker-Month"]').last().then((el)=>{
            //     // cy.log(el.text())
            // })
        }
        getFullYear()
    })




    it.skip('TC02', () => {
        cy.get('.fswFld').first().find('p').type('Pu')
        cy.wait(2000)
        cy.get('.eIvaEJ').each((el) => {
            // cy.log(el.text())
            let tex = el.text().trim()
            if (tex == 'Udaipur') {
                el.click()

            }
        })
    })


})


//  