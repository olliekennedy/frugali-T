context('Check net', () =>{
  beforeEach(() => {
    cy.visit("/")
  })
  it('shows income minus outgoings in the net', function() {
    cy.get("#income-input").type('100000');
    cy.get('#bills-input').type('10000');
    cy.get('#groceries-input').type('10000');
    cy.get('#travel-input').type('10000');
    cy.get('#entertainment-input').type('10000');
    cy.get('#hobbies-input').type('10000');
    cy.get('#tea-input').type('10000');
    cy.get('#loans-input').type('10000');
    cy.get('#savings-input').type('10000');
    cy.get('#net-output').should('have.text', '£20000')
  })
});
