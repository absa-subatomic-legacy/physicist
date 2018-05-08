describe('The Projects Test', function () {

    it('visits the root page', function () {
        cy.visit('/');
    })

    it('finds the contents "Simple Project"', function () {
        cy.visit('/');
        
        cy.contains('Simple Project');
    })

    it('click the link "View" in "Simple Project"', function () {
        cy.visit('/');
        
        cy.get('.card-link').click();
    })

})