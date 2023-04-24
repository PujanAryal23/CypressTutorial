/// <reference types="cypress"/>


it('Read files from fixture', () => {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

it('Read file using readFile func', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

it('Write file', () => {
    cy.writeFile('./cypress/Data/example.txt', "Hello World\n")
    cy.writeFile('./cypress/Data/example.txt', "Hello World\n", { flag: 'a+' })
    cy.writeFile('./cypress/Data/example.txt', "I am Pujan \n", { flag: 'a+' })
    cy.writeFile('./cypress/Data/example.txt', "I am Learning Cypress \n", { flag: 'a+' })
});