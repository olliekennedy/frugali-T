/// <reference types="cypress" />

context('Check H1', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    cy.get(".h1").should("contain", "frugali-TEA");
  })
})
context('Check salary', () =>{
  beforeEach(() => {
  cy.visit("/")
  })
  it('user can input their salary', function() {
    cy.get("#income-input").type('100000');
    cy.get('#net-output').should('have.text', '£100000')
  })
});
