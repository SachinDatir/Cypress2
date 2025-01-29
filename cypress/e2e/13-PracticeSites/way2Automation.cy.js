///<reference types="cypress" />
describe('Way2Automation', () => {
    it.skip('TC01-Dummy registration form', () => {
        cy.visit('https://way2automation.com/way2auto_jquery/index.php')
        cy.get('input[name="name"]').type('sachin')
        cy.get('input[name="phone"]').type(9146753015)
        cy.get('input[name="email"]').type('sdatir@gmail.com')
        cy.get('[name="country"]').select('India')
        cy.get('input[name="city"]').type('Sangamner')
        cy.get('input[name="username"]').last().type('Skd')
        cy.get('input[name="password"]').last().type('Skd12345')
        cy.get('input[type="submit"]').first().click({ force: true })
    })

    it.skip('TC02-Dragable', () => {
        cy.visit('https://www.way2automation.com/way2auto_jquery/draggable.php')
        //cy.get('#toggleNav').children('li').eq(1).find('.dropdown').children().first().click({force: true})

        cy.get('[src="draggable/default.html"]').then((el) => {
            cy.log(el.text())
            let body = el[0].contentDocument.body
            cy.log(body)
            cy.wrap(body).as('bdy')
            cy.get('@bdy').trigger('dragstart', 'center')
        })
    })
    it.only('TC03-Dragable', () => {
        cy.visit('https://www.way2automation.com/way2auto_jquery/draggable.php#load_box')
        cy.get('[href="#example-1-tab-2"]').click()
        cy.get('[src="draggable/default2.html"]').then((el) => {
            cy.log(el.text())
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('[class = "draggable ui-widget-content ui-draggable ui-draggable-handle"]').first().trigger('dragstart','bottomLeft')

        })
    })
})