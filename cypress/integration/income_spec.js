context('Check salary', () =>{
  beforeEach(() => {
  cy.visit("/")
  })
  it('user can input their salary', function() {
    cy.get("#income-input").type('100000');
    cy.get('#net-output').should('have.text', '£100000')
  })
});

context('Check outgoings', () =>{
  beforeEach(() => {
  cy.visit("/")
  })
  it('outgoings', function() {
    cy.get("#income-input").type('100000');
    cy.get('#bills-input').type('10000');
    cy.get('#groceries-input').type('10000');
    cy.get('#travel-input').type('10000');
    cy.get('#entertainment-input').type('10000');
    cy.get('#hobbies-input').type('10000');
    cy.get('#tea-input').type('10000');
    cy.get('#loans-input').type('10000');
    cy.get('#savings-input').type('10000');
    cy.get('#outgoings-output').should('have.text', '£90000')
  })
});


