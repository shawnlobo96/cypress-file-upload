/// <reference types="cypress" />

context('Upload', () => {

  it('Should visit File upload page', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('Should select file upload element and upload JSON', () => {
    cy.fixture('example.xml').then((fileContent) => {
      // @ts-ignore
      cy.get('#file-upload').attachFile({
        fileContent: fileContent.toString(),
        fileName: 'example.xml',
        mimeType: 'application/xml',
      })

      cy.get('#file-submit').click()
      cy.screenshot()
    })
  })
})
