context('Ability to sign in', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('Sign in', () => {
    cy.get('h1').should("contain", "Sign in")
  });
  
  it('Log in', () => {
    const username = 'happysocks'
    const password = '123456'

    context('if wrong log in details', () => {
      it('redirect to the /signin page', () => {
        cy.visit('/signin')
        cy.get('msg').should(
          'contain', 
          'That email is not registered'
        )
        cy.url().should('include', '/singin')
      })
      it('its redirected using cy.request', () => {
        cy.request({
          url: '/account',
          followRedirect: false,
        }).then ((resp) => {
          expect(resp.status).to.eq(302)
          expect(resp.redirectToUrl).to.eq('http://localhost:3000/signin')
        })
      })
    })
    context('form submission', function () {
      beforeEach( () => {
        cy.visit('/signin')
      })
      it('displays errors on signin', function () { 
        cy.get('input[username=username]').type('happysocksTea')
        cy.get('input[username=password]').type('123456{enter}')
  
        cy.get('p.error')
        .should('be.visible')
        .and('contain', 'Please fill in all the fields')
        cy.url().should('include', '/signin')
      })
      it('redirects to /account on success', function () {
        cy.get('input[username=username]').type(username)
        cy.get('input[password=password]').type(password)
        cy.get('form').submit()
  
        cy.url().should('include', '/account')
        cy.get('input').should('contain', 'happysocks')
  
        cy.getCookie('cypress-session-cookie').should('exist')
      })
    })
  })
})