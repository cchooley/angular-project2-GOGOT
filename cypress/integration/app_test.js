describe('GOGOT', function () {
    it('Should pass all tests', function () {
        // https://on.cypress.io/visit
        cy.visit('/')
        cy.title().should('include', 'P2Project')
        cy.get('h1').should('contain', 'GOGOT')
        cy.get('h2').should('contain', 'The Game of Game of Thrones')
        cy.get('option').eq(0).click()
    })

})