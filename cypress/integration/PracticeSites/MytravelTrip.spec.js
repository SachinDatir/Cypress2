///<reference types="cypress" />
describe('my travel trip pune', () => {
    beforeEach(() => {
        cy.visit('http://www.mytraveltrippune.com/')
    })
    it.skip('01 verify the functionality', () => {
        let arr = []
        cy.get('.main-menu>ul>li').find('a:first').each((el) => {
            let href = el.attr('href')
            cy.log(href)
            arr.push(href)
        })
            .then(() => {
                cy.get('.main-menu>ul>li').each((el, index) => {
                    let text = el.find('a:first')
                    // cy.log(text)
                    if (text.attr('href').startsWith('/')) {
                        cy.wrap(text).click()
                        cy.url().should('contain', arr[index])
                    }
                })
            })
    })

    it('TC02 Validate URl using click on each tab', () => {
        let response = ["http://mytraveltrippune.com/", "/group_tour", "/domestic_tour_packages",
            "/maharashtra", "/honeymoon", "/student_tour", "/contactus", "/carrental"]
        cy.get('.main-menu>ul>li').each((el, index) => {
            //cy.log(el.text())
            let text = el.find('a').first()
            //cy.log(text)
            if (text.attr('href').startsWith('http:')) {
                cy.wrap(text).click()
                cy.url().should('contain', response[index])
            }
        })
    })
})