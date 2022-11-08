
class GenericMethod {
    static visitURL(url) {
        cy.visit(url)
    }
    static EnterVal(element, value) {
        cy.get(element).type(value)
    }
    static ClickE(element) {
        cy.get(element).click()
    }
    static Banner(element) {
        cy.get(element).should('be.visible')
    }
    // orangeHrmsite
    static EmployeeInfo(element, value) {
        cy.get(element).first().type(value)
    }
    static EmployeeID(element, value) {
        cy.get(element).last().type(value)
    }
    static EmployeeStatus(element) {
        cy.get(element).first().click({ force: true })
    }

    //  saucdemo
    static AddtoCart(element) {
        cy.get(element).click().as('cart')
    }
    static Basket(element, value) {
        cy.get(element).should('contain', value)
    }

    // amazon

    static clickMobile(element) {
        cy.get(element).first().invoke('removeAttr', 'target').click({ force: true })
    }
    static Cart(element) {
        cy.get(element).click({ force: true })

    }
}
export default GenericMethod