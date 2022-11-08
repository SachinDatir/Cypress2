///<reference types="cypress" />

describe('verify the functionality for table in cypress', () => {
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
    })
  
    it('verify t01', () => {
        let sum = 0
        cy.get('#t01').find('tr').each((el, index) => {
            if (index != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(()=>{
            cy.log(sum)
            expect(sum).to.eql(159)
        })
    })
})