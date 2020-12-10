context('Check salary', () =>{
  beforeEach(() => {
    cy.visit("/")
  })
  it('has default value of £1000', function() {
    cy.get('#income-input').should('have.value', '1000')
  })
  context("delete default value of income", function() {
    beforeEach(() => {
      cy.get("#income-input").type('{selectall}{backspace}');
    })
    it('user can input their salary and net increase by that amount', function() {
      cy.get("#income-input").type('100000');
      cy.get('#net-output').should('have.text', '£100000')
    })
    it('user cannot input letters', function() {
      cy.get("#income-input").type('oanevn');
      cy.get('#net-output').should('have.text', '£0')
    })
  })
});
