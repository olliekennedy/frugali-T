// <reference types="cypress" />

context('Check H1', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('welcome to your landing page!', () => {
    cy.get("h1").should("contain", "Welcome to frugali-TEA");
  })

  it('signin', () => {
    cy.get('button').should("contain", "Sign Up")
  })

  it('signup', () => {
    cy.get('button').should("contain", "Sign In")
  })
  
})
