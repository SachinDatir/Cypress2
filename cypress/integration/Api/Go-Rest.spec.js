///<reference types="cypress" />

let token = `Bearer 05444f3633908fde3a89ee5b83686903ca07870388fd342d5da2959597c984a5`

describe('verify Gorest Api', () => {
    it('verify the List User api', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Authorization: token
        }).then(({ body, status, duration }) => {
            cy.log(body)
            expect(body.length).to.eq(10)
            expect(status).to.eq(200)
            expect(duration).to.be.within(100, 1000)
        })
    })
    it('verify the create USer API', () => {
        let payload = {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `tenali${Math.random() * 6}.ramakrishna@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: token
            },
            body: payload
        }).then((res) => {
            cy.log(res)
            expect(res.body).to.have.keys(["id", "name", "gender", "email", "status"])
            expect(res.statusText).contain('Created')
            expect(res.status).to.eq(201)          
        })
    })
    it('verify the Update api',()=>{
        cy.request({
            method:'PUT',
            url:`https://gorest.co.in/public/v2/users/4666`,
            headers:{
                Authorization: token
            },
            body:{"name":"sachin Peddanaa",
             "email":`sachina${Math.random() * 6}.peddana@15ce.com`, 
             "status":"active"}
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.within(100,1000)
        })
    })
    it('verify the delete API',()=>{
        cy.request({
            method:'DELETE',
            url:'https://gorest.co.in/public/v2/users/4540',
            headers:{
                Authorization:token
            }
        }).then((res)=>{
            expect(res.status).to.eq(204)
        })
    })
})