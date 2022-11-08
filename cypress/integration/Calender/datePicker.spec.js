///<reference types="cypress" />
describe('automation testing DatePicker.html', () => {
    it('TC01', () => {
        Cypress.on('uncaught:exception', (err, Runnable) => {
            return false
        })

        let DATE = new Date()
        DATE.setDate(DATE.getDate() + 300)
        let date = DATE.getDate()
        let month = DATE.getMonth()
        let Year = DATE.getFullYear()
        cy.log(date)
        cy.log(Year)
        let Month = DATE.toLocaleString('default', { month: 'long' })
        cy.log(Month)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click({ force: true })

        function SelectMonthAndYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                // cy.log(el.text())
                if (!el.text().includes(Year)) {
                    cy.get('a[title="Next"]').click()
                    SelectMonthAndYear()
                }
            }).then(() => {
                cy.get('.ui-datepicker-title').then((el) => {
                    if (!el.text().includes(Month)) {
                        cy.get('a[title="Next"]').click()
                        SelectMonthAndYear()
                    }
                })
            })
        }
        function GetFuturedate() {
            cy.contains(date).click()
        }
        SelectMonthAndYear()
        GetFuturedate()


    })
})