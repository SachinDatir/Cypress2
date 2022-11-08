///<reference types="cypress" />
describe('verify the calender functionality', () => {
    it('Tc01 DatePicker', () => {
        let DATE = new Date()
        DATE.setDate(DATE.getDate() + 200)
        let date = DATE.getDate()
        let month = DATE.getMonth()
        let year = DATE.getFullYear()
        let Mmonth = DATE.toLocaleString('default', { month: 'long' })
        cy.log(date)
        // cy.log(month)
        cy.log(year)
        cy.log(Mmonth)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function SelectMonthAndYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                // cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(Mmonth)) {
                        cy.get('.next').last().click()
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
