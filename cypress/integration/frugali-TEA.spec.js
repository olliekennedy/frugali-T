/// <reference types="cypress" />

context('Check H1', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    cy.get(".h1").should("contain", "Tea for team 3");
  })
})
context('Check salary', () =>{
  beforeEach(() => {
  cy.visit("/")  
  })
  it('user can input their salary', function() {
    cy.get("#income-input").find("[type='text']").type('100000');
    cy.get('#net-output').should('have.value', '100000')
  })
});