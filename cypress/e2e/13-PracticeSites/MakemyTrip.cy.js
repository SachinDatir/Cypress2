///<reference types="cypress" />
describe('MakeMyTrip', () => {
    it('TC01', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        let DATE = new Date()
        DATE.setDate(DATE.getDate() + 35)
        let date = DATE.getDate()
        cy.log(date)
        let month = DATE.getMonth()
        let year = DATE.getFullYear()
        cy.log(year)
        let Month = DATE.toLocaleString('default', { month: 'short' })
        // cy.log(Month)

        cy.visit('https://www.easemytrip.com/')
        cy.get('#divRtnCal').click()
        function getFullYearAndYear() {
            cy.get('.month2').last().then((el) => {
                // cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('#img2Nex').click()
                    getFullYearAndYear()
                }
            })
                .then(() => {
                    cy.get('.month2').last().then((el) => {
                        if (el.text().includes(Month)) {
                            cy.get('#img2Nex').click()
                             getFullYearAndYear()
                        }
                    })
                })
        }
        function GetFuturedate() {
            cy.contains(date).click({force: true})
        }
        getFullYearAndYear()
        GetFuturedate()

        // cy.get('.srchBtnSe').click()
    })
})