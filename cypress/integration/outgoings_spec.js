context('Check outgoings', () =>{
  beforeEach(() => {
    cy.visit("/account")
  })
  it('shows the sum total of different categories in outgoings', function() {
    cy.get('#bills-input').type('10000');
    cy.get('#groceries-input').type('10000');
    cy.get('#travel-input').type('10000');
    cy.get('#entertainment-input').type('5000');
    cy.get('#hobbies-input').type('15000');
    cy.get('#tea-input').type('5000');
    cy.get('#loans-input').type('20000');
    cy.get('#savings-input').type('5000');
    cy.get('#outgoings-output').should('have.text', '£80000')
  })
  // it('shows category allowences after page refresh', function() {
  //   cy.get('#bills-input').type('10000');
  //   cy.get('#groceries-input').type('10000');
  //   cy.get('#travel-input').type('10000');
  //   cy.get('#entertainment-input').type('5000');
  //   cy.get('#hobbies-input').type('15000');
  //   cy.get('#tea-input').type('5000');
  //   cy.get('#loans-input').type('20000');
  //   cy.get('#savings-input').type('5000');
  //   cy.visit("/")
  //   cy.get('#bills-input').should('contain', '10000');
  //   cy.get('#groceries-input').should('contain', '10000');
  //   cy.get('#travel-input').should('contain', '10000');
  //   cy.get('#entertainment-input').should('contain', '5000');
  //   cy.get('#hobbies-input').should('contain', '15000');
  //   cy.get('#tea-input').should('contain', '5000');
  //   cy.get('#loans-input').should('contain', '20000');
  //   cy.get('#savings-input').should('contain', '5000')
  // })

});
