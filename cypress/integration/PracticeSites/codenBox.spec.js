///<reference types="cypress" />
describe('codenboxautomationlab.com', () => {
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/')
    })
    it.skip('TC01 radio buttons', () => {
        cy.get('.radioButton').each((el) => {
            // cy.log(el)
            cy.wrap(el).as('radioButton')
            cy.get('@radioButton').check().should('be.checked')
        })

    })
    //autosuggestive dropdown  ==>list of suggestive item
    it.skip('TC02 Dynamic dropdown Example', () => {
        //cy.get('fieldset').children('legend').eq(1).should('have.text','Dynamic Dropdown Example')
        cy.get('#autocomplete').type('Ind')
        cy.get('#ui-id-1').find('.ui-menu-item').eq(1).contains('India').click()

    })

    // select command is use for static dropdown
    it.skip('TC03-Static dropdown', () => {
        cy.get('#dropdown-class-example').select('Selenium')
    })
    it.skip('TC04-checkbox examples', () => {
        cy.get('#checkbox-example').each((el) => {
            // cy.log(el)
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
        })
    })
    it.skip('TC05-Switch Window Example', () => {
        cy.get('#openwindow').click()
        cy.url().should('contain', 'practice')
    })
    it.skip('TC06-switch tab example', () => {
        cy.get('#opentab').invoke('removeAttr','target').click()
    })
    it.skip('switch to alert examples', () => {
        cy.get('#name').type('sachin')
        cy.get('#alertbtn').click()
        cy.on('window:alerts', (str) => {
            // cy.log(str)
            expect(str).to.eq('Hello, share this practice page who love to learn automation')
            return true
        })
    })
    it('switch to confirm examples', () => {
        cy.get('#name').type('sachin')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
            // cy.log(str)
            expect(str).to.eq('Hello sachin, Are you sure you want to confirm?')
            return true
        })
    })

})