///<reference types="cypress" />
describe('codenboxautomationlab.com', () => {
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/')
    })
    it('verify table', () => {
        let sum = 0
        cy.get('#product').find('tr').each((el, i) => {
            // cy.log(el.text())
            if (i != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(() => {
            expect(sum).to.eq(594)
        })
    })
})