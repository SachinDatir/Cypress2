describe('test the grep plugin {smoke}',()=>{
    it('verify the tags',{tags:"@smoke"},()=>{
        cy.visit('https://chat.openai.com/')
    })
})  