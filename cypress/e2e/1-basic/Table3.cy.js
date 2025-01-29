describe('Demoapplitool functionality',()=>{
    it('validate the tables functionality',()=>{
        let sum = 0
        cy.visit('https://demo.applitools.com/app.html#')
        cy.get('.table').find('tr').then((el,i)=>{
             if(i!=0){
                sum = sum + (el.children('td').last().text())
             }
        }).then(()=>{
            cy.log(sum)
        })
    })
})