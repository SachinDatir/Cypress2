///<reference types="cypress" />
describe('verify the functionality for table in cypress', () => {
    it('verify th first table', () => {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each((el, i) => {
            if (i != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
            // cy.log(sum)
            // cy.log(el.children().last().text())
        }).then(() => {
            expect(sum).to.eql(159)
        })
    })
    it('verify the second table', () => {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each((el, index) => {
            if (index != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(() => {
            expect(sum).to.eql(163)
        })
    })
    it.only('verify the  table via utility', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.validateTable(1, 159)
        cy.validateTable(2, 163)
    })
})