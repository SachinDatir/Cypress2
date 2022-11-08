// class checkboxes {
//     multipleCheck() {
//         cy.get('input[type="checkbox"]').each((el) => {
//             // cy.get(el)
//             cy.wrap(el).as('checkboxes')
//             cy.get('@checkboxes').check().should('be.checked')
//             cy.get('@checkboxes').uncheck().should('not.be.checked')
//         })
//     }
// }

class Contact {
    contactUsform(firstName, lastName, email, message) {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(firstName)
        cy.get('input[name="last_name"]').type(lastName)
        cy.get('input[name="email"]').type(email)
        cy.get('textarea[name="message"]').type(message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    }
}




export default Contact;