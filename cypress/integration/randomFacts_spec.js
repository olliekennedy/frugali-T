context('Have random facts', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show a random fact after every refresh', () => {
    var facts = [
      "Tea is the second most consumed beverage on the planet",
      "Tea is good for you",
      "Tea was once considered dangerous"
    ]
    expect(cy.get('#random-fact').invoke('text').then((text) => {
      expect(text.trim()).to.be.oneOf(facts);
    }))
  });
})
