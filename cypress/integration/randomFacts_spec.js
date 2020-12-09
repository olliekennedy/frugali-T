context('Have random facts', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show a random fact after every refresh', () => {
    cy.get(".random-facts").should("to.have", [
      "Tea is the second most consumed beverage on the planet", 
      "Tea is good for you", 
      "Tea was once considered dangerous"
    ])
  });
})
