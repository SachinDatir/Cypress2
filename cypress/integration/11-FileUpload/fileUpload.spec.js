///<reference types="cypress" />


// https://www.npmjs.com/package/cypress-file-upload

describe('FileUpload functionality in cypress', () => {
    it('TC01 first fileUpload', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let Myfile = 'file.txt';
        cy.get('#fileUpload').attachFile(Myfile)
    })
    it('TC02-second fileUpload', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let file = 'Red-Wine.png'
        cy.get('#file').attachFile(file)
        cy.get('.box__success').should('contain', 'Done')
    })

    it('TC03-verify the multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file1 = 'Red-wine.png'
        let file2 = 'shiva-.jpg'
        let file3 = 'sunset image.png'
        cy.get('#filesToUpload').attachFile([file1, file2, file3])
        cy.get('#fileList').children().should('have.length', 3)
    })
    it.only('TC03-change file name', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let file = 'sunset image.png'
        cy.get('#filesToUpload').attachFile({ filePath: file, fileName: 'Sunset' })
        cy.get('#fileList').children().should('have.length', 1)
    })
})




