///<reference types="cypress" />

describe('Automation site', () => {
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/')
    })
    it('TC-01 validate each tab link', () => {
        let arr = []
        cy.get('#primary-menu').find('a').each((el) => {
            // cy.log(el.text())
            let href = el.attr('href')
            //cy.log(href)
            arr.push(href)
        })
            .then(() => {
                cy.get('#primary-menu').each((el, index) => {
                    let text = el.find('a')
                    cy.log(text)
                    // if (text.attr('href').startsWith('/')) {
                    //     cy.wrap(text).click()
                    //     cy.url().should('contain',arr[index])
                    // }
                })
            })
    })
})