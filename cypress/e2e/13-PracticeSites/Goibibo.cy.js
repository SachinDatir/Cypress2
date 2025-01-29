///<reference types="cypress" />
describe('Goibibo functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.goibibo.com/')
    })



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




    it.only('TC02', () => {
        cy.get('.fswFld').first().find('p').type('Pu')
        cy.wait(2000)
        cy.get('#autoSuggest-list>li>div').each((el) => {
            // cy.log(el.text())
            let text = el.text().trim()
            if (text.includes('Udaipur')) {
                cy.wrap(el).click()

            }
        })
    })


})


//  