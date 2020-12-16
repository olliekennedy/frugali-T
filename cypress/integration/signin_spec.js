context('Ability to sign in', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('Sign in', () => {
    cy.get('h1').should("contain", "Sign in")
  });
  
  it('Logging in', () => {
    const username = 'test'
    const password = '123456'

    context('unauthorized', () => {
      it('it redirects to the account page', () => {
        cy.visit('/account')
        cy.get('p').should(
          'contain', 
          'Please fill in all the fields'
        )
        cy.url().should('include', 'unauthorised')
      })

      it('its redirected using cy.request', () => {
        cy.request({
          url: '/account',
          followRedirect: false,
        }).then ((resp) => {
          expect(resp.status).to.eq(302)

          expect(resp.redirectToUrl).to.eq('http://localhost:3000/signup')
        })
      })
    })

    context('form submission', function () {
      beforeEach(function () {
        cy.visit('/signin')
      })
  
      it('displays errors on signin', function () {
        
        cy.get('input[username=username]').type('testTea')
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
        cy.get('input').should('contain', 'test')
  
        // and our cookie should be set to 'cypress-session-cookie'
        cy.getCookie('cypress-session-cookie').should('exist')
      })
    })
    
  })
})