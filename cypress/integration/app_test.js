describe('GOGOT', function () {
    it('Should pass all tests', function () {
        cy.visit('/')
        cy.title().should('include', 'P2Project')
        cy.get('h1').should('contain', 'GOGOT')
        cy.get('h2').should('contain', 'The Game of Game of Thrones')
        cy.get('nav').should('contain', 'Home')
        cy.get('section > div').should('have.class', 'credits')
        cy.get('app-selected').should('contain', "This Week's Picks")
        cy.get('nav').should('contain', 'Game').click()
        cy.url().should('eq', 'http://localhost:4200/list')
        cy.get('select').children().should('have.length', 10)
        cy.get('select').select('Conor')
        cy.get('button').click()
        cy.get('select').children().should('have.length', 7)
        cy.get('select').select('Bronn')
        cy.get('.charImg').should('be.visible')
        cy.get('.confirmOne').should('be.visible')
        cy.get('.stats').children().should('have.length', 7)
        cy.get('button').click()
        cy.get('button:last').click()
        cy.url().should('eq', 'http://localhost:4200/list')
        cy.get('.charCard').should('be.visible')
        cy.get('button').click()
        cy.get('button:first').click()
        cy.get('app-selected').should('contain', "Conor selected Bronn (2)")
        cy.get('nav > a:last').click()
        cy.url().should('eq', 'http://localhost:4200/brochure')
        cy.get('.brochure').should('be.visible')
        cy.get('.brochure').should('contain', 'GOGOT is simple: you win, or you die.')
        cy.get('nav > a:first').click()
        cy.get('.credits').should('be.visible')
    })

})