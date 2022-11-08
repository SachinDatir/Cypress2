///<reference types="cypress" />

describe('verify the iframe functionality', () => {
    const getIframeBody = (id) => {
        return cy.get(`#${id}`).its("0.contentDocument.body").then(cy.wrap)
    }
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
    })
    it.skip('verify iframe by Jquery', () => {
        cy.get('#frame').then((el) => {
            // cy.log(el)
            let body = el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').then(() => {
                cy.get('@bdy').find('a[href="index.html"]').should('contain', 'Home')
            })
        })
    })
    it.skip('verify iframe by javascript', () => {
        cy.get('#frame').then((el) => {
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').then(() => {
                cy.get('@bdy').find('a[href="index.html"]').should('contain', 'Home')
                cy.get('@bdy').find('a[href="products.html"]').should('have.text', 'Our Products')
                cy.get('@bdy').find('a[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
            })
        })
    })

    it('verify the iframe via javascript', () => {
        getIframeBody('frame').find('a[href="index.html"]').should('contain', 'Home')
        getIframeBody('frame').find('a[href="products.html"]').should('have.text', 'Our Products')
        getIframeBody('frame').find('a[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
    })

})