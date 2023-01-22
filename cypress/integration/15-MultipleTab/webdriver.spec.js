///<reference types="cypress" />
import GenericMethod from "../9-PomExport/generic"
import CSSselector from "../9-PomExport/selector"
let obj2 = new CSSselector()
describe('Multiple window/tab handling', () => {
    it('webdriverUniversity page', () => {
        GenericMethod.visitURL('http://www.webdriveruniversity.com/')
        GenericMethod.Multipletab(obj2.selectElement.Tab)
        GenericMethod.EnterVal(obj2.selectElement.name, 'sachin')
        GenericMethod.EnterVal(obj2.selectElement.lastname, 'datir')
        GenericMethod.EnterVal(obj2.selectElement.email, 'sdatir@gmail.com')
        GenericMethod.EnterVal(obj2.selectElement.mesg, 'i am learning cypress')
        GenericMethod.ClickE(obj2.selectElement.submit)

        // cy.get('[href="Contact-Us/contactus.html"]').invoke('removeAttr', 'target').click()

    })
})