///<reference types="cypress" />

describe('verify the localstorage for app', () => {
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/')
    })
    it('Local storage using window', () => {
        cy.window().then((win) => {
            expect(win.localStorage.length).to.eql(0)
            window.localStorage.setItem('id', 4)
            expect(win.localStorage.length).to.eql(1)
            expect(win.localStorage.getItem('id')).to.equal('4')
        })
    })
    it('Clearing the local storage using cypress command', () => {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            expect(win.localStorage.length).to.eql(0)
        })
    })

    //Document()
    it('Verify the title of the page', () => {
        cy.document().then((doc) => {
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })
    })
    it('Verify the title of the page by using cypress command', () => {
        cy.title().then((title) => {
            expect(title).to.equals('WebDriverUniversity.com')
        })
    })
    it.only('cookies', () => {
        cy.setCookie('username', 'skd')
        cy.getCookie('username')
        cy.setCookie('username', 'sachin')
        cy.setCookie('python', "selenium")
        cy.clearCookies()
    })

})