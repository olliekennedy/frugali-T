context('Check outgoings', () =>{
  beforeEach(() => {
    cy.visit("/")
  })
  it('shows the sum total of different categories in outgoings', function() {
    cy.get('#bills-input').type('10000');
    cy.get('#groceries-input').type('10000');
    cy.get('#travel-input').type('10000');
    cy.get('#entertainment-input').type('10000');
    cy.get('#hobbies-input').type('10000');
    cy.get('#tea-input').type('10000');
    cy.get('#loans-input').type('10000');
    cy.get('#savings-input').type('10000');
    cy.get('#outgoings-output').should('have.text', '£80000')
  })
});
