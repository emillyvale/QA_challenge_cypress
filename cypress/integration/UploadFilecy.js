const faker = require("faker-br");

context('Upload File', () => {

    it('Open website - Validating website loading', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        
    })

    it('Upload File', () => {
        cy.get(':nth-child(9) > .dropdown-menu > :nth-child(4) > a').click()
    })

    it('image upload', () => {
        cy.get("input[type=file]").attachFile("photo.jpg") //upload file
    })

    
})