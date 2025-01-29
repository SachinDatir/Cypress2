describe('Intercept', () => {
    it('validate the XHR get request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getBody')

        cy.contains('Get Comment').click()
        //    **************************then******************
        cy.wait('@getBody').then((obj) => {

            obj.response.body.name = "sachin"
            expect(obj.response.statusCode).to.eq(200)
            expect(obj.response.body).to.have.property('id')
            expect(obj.response['headers']['connection']).to.eq("keep-alive")
            expect(obj.response['body']).to.have.all.keys('body', 'email', 'name', 'postId', 'id')
            return obj.response.body.id //return id only
        }).then((el) => {
            cy.log(el)
            expect(el).to.eql(1)
        })
    })

    it.only('TC-02', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getBody')

        cy.contains('Get Comment').click()
        //    **************************should******************
        cy.wait('@getBody').should((obj) => {
            expect(obj.response.statusCode).to.eq(200)
            obj.response.body.name = "SKD"
            cy.log(obj.response)
            expect(obj.response.statusMessage).eq('OK')
            //return obj.response.body.id => //return obj.response.body.id =>used or not used it return object only
        }).then((el)=>{
            cy.log(el)
        })
    })
})