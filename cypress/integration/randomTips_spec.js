context('Have random tips', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show a random tip after every refresh', () => {
    var tips = [
      "Enter your income first",
      "Teabag, water, milk. End of conversation.",
      "A strong brew is a good brew",
      "Change your budgets if your net is below 0"
    ]
    expect(cy.get('#random-tip').invoke('text').then((text) => {
      expect(text.trim()).to.be.oneOf(tips);
    }))
  });
})
