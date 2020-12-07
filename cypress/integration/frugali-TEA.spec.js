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
