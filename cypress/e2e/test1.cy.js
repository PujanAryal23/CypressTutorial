it('Google Search',()=>{
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Pujan Aryal')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
})