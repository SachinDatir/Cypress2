///<reference types="cypress" />
describe('datePicker functionality', () => {
  it('TC01', () => {
    Cypress.on('uncaught:exception', (err, Runnable) => {
      return false
    })
    let DATE = new Date()
    DATE.setDate(DATE.getDate() + 300)
    let date = DATE.getDate()
    let month = DATE.getMonth()
    let Year = DATE.getFullYear()
    let Month = DATE.toLocaleString('default', { month: 'long' })
    cy.log(date)
    cy.log(Month)
    cy.log(Year)

    cy.visit('https://demo.automationtesting.in/Datepicker.html')
    cy.get('#datepicker2').click()

    function SelectMonthAndYear() {
      cy.get('.datepick-month-year').first().select(`${Month}`).then((el) => {
        cy.log(el.text())
        if (!el.text().includes(Month)) {
          cy.get('[href="javascript:void(0)"]').eq(2).click({force: true})

        }

        SelectMonthAndYear()

      })
      // cy.get('.datepick-month-year').first().select(`${Month}`)
      // cy.get('.datepick-month-year').last().select(`${Year}`)


    }
    SelectMonthAndYear()
  })
})