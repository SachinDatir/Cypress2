///<reference types="cypress" />
describe('verify the Redbus app datepicker', () => {
    it('verify the Datepicker(REDBUS', () => {
        Cypress.on('uncaught:exception', (err, Runnable) => {
            return false
        })
        let DATE = new Date()
        DATE.setDate(DATE.getDate() + 305)
        let date = DATE.getDate()
        let month = DATE.getMonth()
        let year = DATE.getFullYear()
        cy.log(date)
        let Month = DATE.toLocaleString('default', { month: 'long' })
        cy.log(Month)
        cy.log(year)

        cy.visit('https://www.redbus.com/')
        cy.get('button[class="sc-jTzLTM bfMZDh"]').click()
        cy.get('#onward_cal').click({ force: true })

        function getFullYearAndMonth() {
            cy.get('[class="DayNavigator__CalendarHeader-sc-1tlckkc-1 ccLrBz"]').first().then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('#next').click({force: true})
                }
                getFullYearAndMonth()
            })
        }
        getFullYearAndMonth()
    })
})