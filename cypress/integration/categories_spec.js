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
})
