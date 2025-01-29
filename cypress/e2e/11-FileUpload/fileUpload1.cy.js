///<reference types="cypress" />
describe('FileUpload', () => {
    it.skip('upload single file', () => {
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Red-Wine.png')
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('#content>div>h3').should('have.text', 'File Uploaded!')
    })
    it.skip('upload file(chnge file name)', () => {
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'Red-Wine.png', fileName: 'WineBenifit.png' })
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('#content>div>h3').should('have.text', 'File Uploaded!')
    })

    it.skip('upload file(chnge file name)', () => {
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('sunset image.png', { subjectType: 'drag-n-drop' })
        cy.wait(2000)
        cy.get('#drag-drop-upload>.dz-preview>.dz-details>.dz-filename>span').contains('sunset image.png')
    })

    it('upload file(multiple file)', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file1 = 'Red-wine.png'
        let file2 = 'shiva-.jpg'
        let file3 = 'sunset image.png'
        cy.get('#filesToUpload').attachFile([file1,file2,file3])
        cy.get('#fileList').children().should('have.length',3)
        
    })
})