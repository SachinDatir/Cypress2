// https://github.com/Mayurimk98
describe('FLipkart functionality',()=>{
    let arr = []
    let price = 20000
    it('TC-01',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('input[class="_3704LK"]').type('mobile').type("{enter}")
        cy.get('._2YxCDZ').last().select(String(price))
        cy.get('._30jeq3._1_WHN1').each((el)=>{
            // cy.log(el.text())
            let prize = el.text()
            arr.push(Number(prize))
            // cy.log(arr)
            cy.wrap(Number(el.text().replace(/₹|,/gi))).should('be.lte',price)
        })

    })

    
})