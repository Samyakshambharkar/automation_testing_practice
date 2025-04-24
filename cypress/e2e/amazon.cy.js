describe('template spec', () => {
    it('Open the website and fill the form', () => {
      cy.visit('https://amazon.in')
    //   cy.get('.nav-search-facade').click({force:true}).contains('Baby').click({force:true})
    cy.get('#nav-flyout-searchAjax').click({force:true}).type('toys', {force:true})
     cy.get('#nav-search-submit-button').click({force:true})
 
    })
})