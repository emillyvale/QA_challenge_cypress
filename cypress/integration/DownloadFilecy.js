const faker = require("faker-br");
const path = require("path");


context('File creation and download', () => {

    it('Open website - Validating website loading', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        
    })


    it('File download', () => {
        cy.get(':nth-child(9) > .dropdown-menu > :nth-child(3) > a').click()
        cy.get('#textbox').type('testing download txt file')
        cy.get('#createTxt')// exist?
        cy.get('#pdfbox').type('testing download pdf file')
        cy.get('#createPdf')// exist?
        cy.get('[style="text-align: center;"] > .btn') // exist?


    })
})