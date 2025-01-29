///<reference types="cypress" />
describe('dynamicDropdown', () => {
    it('TC-01 dynamic', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('[id="text-box"]').first().click()
        cy.get('div[class="_16Y_"] ._3ewH ._3sXO', { force: true }).each((el) => {
            // cy.log(el.text())
            let stat = el.text()
            // cy.log(stat)
            if (stat == 'Delhi- All Stations') {
                cy.wrap(el).click({ force: true })
            }
        }).then(() => {
            cy.get('[id="text-box"]').last().click()
            cy.get('div[class="_16Y_"] ._3ewH ._3sXO', { force: true }).each((el) => {
                let stat1 = el.text()
                if (stat1 == 'HWH - Howrah Jn') {
                    cy.wrap(el).click({ force: true })
                }
            })
        })
    })

    it('TC-02 static dropdown', () => {
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[id="package"]').select('Super Deluxe').should('have.value', 'Super Deluxe')
    })

    it('TC-03 static dropdown', () => {
        cy.visit('https://www.lonavalacab.com/')
        let plzSelect = ['Deluxe Sightseeing', '17 Seater']
        cy.get('[class="form-control tm-select"]').each((el, i) => {
            cy.wrap(el).select(plzSelect[i]).should('contain', plzSelect[i])
        })
    })

    it('TC04 - static dropdown',()=>{
       cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
       cy.get('#country').select('India')
       cy.get('#state').select('Maharashtra').then((el)=>{
        cy.get('#city').select('Pune').should('contain','Pune')
       })
    })

    it.only('Tc05 Dynamic Dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('[class="gLFyf"]').type('cypress auto')
        cy.get('.eIPGRd').each((el)=>{
            // cy.log(el.text())
            if(el.text().includes('cypress automation jobs')){
                cy.wrap(el).click()
            }
        })
    })
})