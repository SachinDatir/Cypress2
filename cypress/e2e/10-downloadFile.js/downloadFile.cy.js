///<reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

// problem statement=====>download all visible imaged from amazon web page.
describe('Tc01-cypress-downloadfile', () => {
  it.skip('TC01 download visible image-AMAZON', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('img').each((el, index) => {
      // cy.log(el)
      let imgUrl = el.prop('src')
      cy.downloadFile(imgUrl, 'cypress/fixtures/amazonImgs', index + '.jpg')
    })
  })

  it('TC02 download visible images -AJIO', () => {
    cy.visit('https://www.ajio.com/')
    cy.get('img').each((el, index) => {
      let imgUrl = el.prop('src')
      cy.downloadFile(imgUrl, 'cypress/fixtures/AJIOfashionIMGS', index + ".jpg")
    })
  })

})

// https://www.npmjs.com/package/cypress-downloadfile