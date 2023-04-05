describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','query-btn')
    .and('be.enabled')
  })
})