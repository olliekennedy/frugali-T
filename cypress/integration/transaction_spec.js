context("transactions", () => {
  beforeEach(() => {
    cy.visit('/transactions')
  })

  it("should show a heading", () => {
    cy.get("h1").should("contain", "Spill the Tea");
    cy.get("h3").should("contain", "Enter you transactions");
  })
})
