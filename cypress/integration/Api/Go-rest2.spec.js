///<reference types="cypress" />
let token = `Bearer 05444f3633908fde3a89ee5b83686903ca07870388fd342d5da2959597c984a5`

describe('verify the GO-REST API', () => {
    it('veify the create user Api',()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:token
            },
            body:{
                "name":"Tenali Ramakrishna",
                 "gender":"male", 
                 "email":`pankaj${Math.random() * 6}.ramakrishna@15ce.com`,
                  "status":"active"
            }
        }).then((res)=>{
            //cy.log(res)
            return res.body.id

        }).then((id)=>{
            // cy.log(id)
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers:{
                    Authorization:token
                },
                body:{
                    "name":"Allasani Peddana", 
                    "email":`allasani${Math.random() * 6}.pana@15ce.com`, 
                    "status":"active"
                }
            }).then((res)=>{
                // cy.log(res)
                expect(res.status).to.eq(200)
                return res.body.id
            }).then((id)=>{
                // cy.log(id)
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization:token
                    }
                }).then((res)=>{
                    // cy.log(res)
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})