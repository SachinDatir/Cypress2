// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//file upload
import 'cypress-file-upload';

// img download
require('cypress-downloadfile/lib/downloadFileCommand')





Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('validateTable',(id,expected)=>{
    let sum = 0 
    cy.get(`#t0${id}`).find('tr').each((el,i)=>{
     if(i!=0){
        //cy.log(el.children('tr').last().text())
        sum = sum+ Number(el.children('td').last().text())
     }
    }).then(()=>{
        expect(sum).to.eql(expected)
    })
})

