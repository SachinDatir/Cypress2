///<reference types="cypress" />
describe('VeenWorld', () => {
    it('tc01', () => {
        cy.visit('https://www.veenaworld.com/')
        cy.get('input[type="text"]').first().type('jammu and kashmir')
        cy.get('input[type="text"]').eq(2).click({ force: true })
        cy.get('#Dec2022').click({ force: true })
        cy.get('input[type="text"]').eq(3).click({ force: true })
        cy.get('[type="button"]').eq(4).click({ force: true })
        cy.get('div[class="searchButton vw-btn-primary"]').click({ force: true })
        // cy.get('[class="imageWpr"]').eq(3).should('be.visible')
        cy.get('.titleDiv>h3').first().then((el) => {
            //cy.log(el.text())
            cy.wrap(el).click({ force: true })        //should('have.text', ' Sikkim Darjeeling Gangtok Lachung ')
        }).then((el) => {
            // cy.log(el.text())
             //cy.get('div[class="yt-poster"]>img').should('be.visible')
             cy.get('[class="cta-col ng-tns-c245-45"]>button').last().click({force:true})
        })

        // cy.get('[class="yt-poster"]').last().should('be.visible')
        // cy.get('[class="vw-btn-primary mb-2 order-2 order-md-1"]').last().click({force:true})
        // cy.get('div[class="cta-col ng-tns-c233-8"]').last().click({force:true})
    })
})