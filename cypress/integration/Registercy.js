const faker = require("faker-br");

context('New user registration', () => {

    it('Open website - Validating website loading', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        
    })

    it('Fill in fields', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("test00") //name
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("test00") //lastname
        cy.get('.col-md-8 > .form-control').type("test adress") //adress
        cy.get('#eid > .form-control').type("test@gmail.com") //email
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type("1234567890") //phone 10 caracth
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').click() //gender
        cy.get('#checkbox2').check() //hobbies
        cy.get('#Skills').select('APIs')  //skills
        cy.get('.select2-selection__arrow').click()
        cy.get('#select2-country-results > :nth-child(10)').click() //country
        cy.get('#yearbox').select('1997') //date
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('April') //monthy
        cy.get('#daybox').select('3') //day
        cy.get('#firstpassword').type('R5Ty%%$123') //password
        cy.get('#secondpassword').type('R5Ty%%$123') //password
    })

    it('image upload', () => {

        cy.get("input[type=file]").attachFile("photo.jpg") //upload file
        
    })

    it('submit', () => {

        cy.get('#submitbtn').click()
        
    })

    it('valid fail', () => {

        cy.get('#countries')
        
    })

    
})