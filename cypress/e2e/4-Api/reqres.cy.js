///<reference types="cypress" />

describe('verify reqres Api', () => {
    it('verify get request', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((res) => {
            cy.log(res.body)
            expect(res.body.data[0].id).to.eq(7)
            expect(res.status).to.eq(200)
        })
    })
    it('verify the post Api', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "sachin",
                "job": "Tester"
            }
        }).then((res) => {
            cy.log(res.headers)
            expect(res.status).to.eq(201)
            expect(res.headers.connection).contains("keep-alive")
        })
    })
    it('verify the put Api',()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/5',
            body:{             
                    "name": "skd",
                    "job": "software tester"             
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.isOkStatusCode).to.eq(true)
        })
    })
    it.only('verify the delete Api',()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2'
        }).then((res)=>{
            expect(res.status).to.eq(204)
        })
    })
})