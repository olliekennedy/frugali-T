context('Check salary', () =>{
  beforeEach(() => {
    cy.visit("/")
  })
  it('user can input their salary and net increase by that amount', function() {
    cy.get("#income-input").type('100000');
    cy.get('#net-output').should('have.text', '£100000')
  })
});
