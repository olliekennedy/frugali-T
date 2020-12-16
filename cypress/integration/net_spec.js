context('Check net', () =>{
  beforeEach(() => {
    cy.visit("/account")
  })
  it('shows income minus outgoings in the net', function() {
    cy.get('#savings-input').type('900');
    cy.get('#net-output').should('have.text', '£100')
  })
  it('has font colour black and background green when £21', function() {
    cy.get('#savings-input').type('979');
    cy.get('#net-output').should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(218, 240, 220)')
  })
  it('changes colour to orange when £20', function() {
    cy.get('#savings-input').type('980');
    cy.get('#net-output').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(237, 225, 202)')
  })
  it('changes colour to red when £0', function() {
    cy.get('#savings-input').type('1000');
    cy.get('#net-output').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(232, 202, 202)')
  })
  it('changes colour to red when £-10', function() {
    cy.get('#savings-input').type('1010');
    cy.get('#net-output').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(232, 202, 202)')
  })

});
