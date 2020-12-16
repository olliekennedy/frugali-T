context("transactions", () => {
  beforeEach(() => {
    cy.visit('/new-transaction')
  })

  it("should show a heading", () => {
    cy.get("h1").should("contain", "Transactions");
  })
})

context("transactions form", () => {
  beforeEach(() => {
    cy.visit('/new-transaction')
  })

  it("should show form heading", () =>{
    cy.get("h3").should("contain", "Spill the TEA: Enter your transactions");
  })

  it("shows the new transaction after it has been entered", () => {
    cy.get("#description-input").type("Redbush")
    cy.get("#category-selector").select("tea")
    cy.get("#amount-input").type("100")
    cy.get("#newtransaction-form").submit()
    cy.get(".previous-transactions").should("contain", "Redbush");
  })
})
