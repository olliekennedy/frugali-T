context('see categories heading', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('shows categories heading', () => {
    cy.get('.categories').get('h2').should("contain", "Spill the tea")
  })
  it('shows categories', () => {
    cy.get('.categories')
      .should("contain", "Bills")
      .should("contain", "Groceries")
      .should("contain", "Travel")
      .should("contain", "Loans")
      .should("contain", "Hobbies")
      .should("contain", "Savings")
      .should("contain", "Entertainment")
      .should("contain", "TEA")
  })
  it('fills in category values & shows net balance', () => {
    cy.get("#income-input").type('100000');
    cy.get('#bills-input').type('10000');
    cy.get('#groceries-input').type('10000');
    cy.get('#travel-input').type('10000');
    cy.get('#entertainment-input').type('10000');
    cy.get('#hobbies-input').type('10000');
    cy.get('#tea-input').type('10000');
    cy.get('#loans-input').type('10000');
    cy.get('#savings-input').type('10000');
    cy.get('#net-output').should('have.text', '£90000')
  })
})
