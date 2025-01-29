//  desplaying all our fetch result in a multiple page instead of showing that all on one page
describe("PAgination", () => {
    it('Amazon pAgination', () => {
        let indexA = 2
        cy.visit('https://www.amazon.in/s?k=test&crid=325BILYMZG3RN&sprefix=tes%2Caps%2C309&ref=nb_sb_noss_2%27')
        Pagination()
        function Pagination() {
            cy.wait(4000)
            cy.get('body').then((bdy) => {
                if (bdy.find(`[aria-label="Go to page ${indexA}"]`).length > 0) {
                    cy.get(`[aria-label="Go to page ${indexA}"]`).should('be.visible').click({ force: true })
                    indexA = indexA + 1
                    Pagination()

                }
            })

        }
    })

    it.only('flipcart pagination', () => {
        let arr = []
        cy.visit('https://www.flipkart.com/search?q=test&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2')
        cy.get('._2MImiq>.yFHi8N').find('a').each((el) => {
            let href = el.attr('href')
            arr.push(href)
        })
        .then(()=>{
            cy.get('._2MImiq>.yFHi8N').each((el,index)=>{
                let txt = el.find('a')
                // cy.log(txt)
                if(txt.attr('href').startsWith('/')){
                    cy.wrap(txt).click({multiple: true })
                    cy.url().should('contain',arr[index])
                }
            })
        })
    })
})