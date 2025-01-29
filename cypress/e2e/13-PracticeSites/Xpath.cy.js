
// comand for install X path
//npm install -D cypress-xpath
//   https://www.npmjs.com/package/cypress-xpath

describe('Xpath locstors',()=>{
    it('find the number of product',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.xpath('//input[@name="first_name"]').type('sachin')
        cy.xpath('//input[@name="last_name"]').type('datir')
        cy.xpath('//input[@name="email"]').type('sdatir@gmail.com')
        cy.xpath('//textarea[@name="message"]').type('i am learning Xpath')
        cy.xpath('//input[@type="submit"]').click()
        cy.xpath('//div[@id="contact_reply"]/h1').should('have.text','Thank You for your Message!')
    })
})