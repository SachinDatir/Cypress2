///<reference types="cypress" />
import users from '../../fixtures/contact2.json'
import info from '../../fixtures/contact.json'
import contact from '../8-POM/radionExport'

let contactus = new contact()

describe('verify contact us form by import', () => {
    let objA;
    before(() => {
        cy.fixture('contact').then((obj) => {
            objA = obj
        })
    })

    it('verify the contactus by Object retrive', () => {
        contactus.contactUsform(info.firstName, info.lastName, info.email, info.message)
    })

    it('verify the contact us by direct call', () => {
        cy.fixture('contact').then((obj) => {
            // cy.log(obj)
            contactus.contactUsform(obj.firstName,obj.lastName,obj.email,obj.message)
            // cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            // cy.get('input[name="first_name"]').type(obj.firstName)
            // cy.get('input[name="last_name"]').type(obj.lastName)
            // cy.get('input[name="email"]').type(obj.email)
            // cy.get('textarea[name="message"]').type(obj.message)
            // cy.get('input[type="submit"]').click()
            // cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
    it.skip('verify the contact us by before', () => {
        cy.log(objA)
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(objA.firstName)
        cy.get('input[name="last_name"]').type(objA.lastName)
        cy.get('input[name="email"]').type(objA.email)
        cy.get('textarea[name="message"]').type(objA.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it.skip('verify contactUs form by multiple users', () => {
        users.forEach((el) => {
            /// we didnot find the mistake by this way
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

    users.forEach((el, index) => {
        it.skip(`verify multiple users${index + 1}`, () => {
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})