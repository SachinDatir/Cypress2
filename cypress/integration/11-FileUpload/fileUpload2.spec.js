//For file uploading we need to installed one pluging from https://www.npmjs.com/package/cypress-file-upload
//then run command as => npm install --save-dev cypress-file-upload
//in cypress/support/commands.js add commad as =>import 'cypress-file-upload';
//For file uploading u need to store one file in feature folder
describe('fileUpload', () => {
    // Upload the file where confirmation popup came upter uploading
    //Positive Assertion 
    it.skip('TC01 Positive scenario', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=')
        let file = 'Red-Wine.png'
        cy.get('#myFile').attachFile(file)
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('Your file has now been uploaded!')
        })

    })
    //  Negative scenarion
    it('TC-02 negative scenario', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })
    })

    //  Multiple File
    it.only('TC03 Multiple file upload', () => {
        let multipleFile = ['file.txt', 'Red-Wine.png']
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        cy.get('#igUpload1_ibb_fp').attachFile(multipleFile)
        // cy.get('#igUpload1_fc').children('div').should('have.length',multipleFile.length)
    })



})