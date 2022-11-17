///<reference types="cypress" />

describe('verify the functionality for table in cypress', () => {

    it('verify t01', () => {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each((el, index) => {
            if (index != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eql(159)
        })
    })

    it('verify the table 02', () => {
        let sum = 0
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').find('tbody').children().each((el) => {
            // cy.log(el.text())
            sum = sum + Number(el.children('td').last().text())
        }).then(() => {
            // cy.log(sum)
            expect(sum).to.equal(7100)
            expect(sum).to.be.within(7000, 8000)
        })
    })


    it.only('verify the table 03', () => {
        let names = []
        let arr =
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').find('tbody').children().each((el, i) => {
            // cy.log(el.text())
            if (i != 0) {
                arr = el.children('td').eq(1).text()
                // names.push(arr)
                names.push(arr)
            }
            
        })
        .then((arr,index) => {
         expect(arr).to.eq(names[index])
        })

    })
})