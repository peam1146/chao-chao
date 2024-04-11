describe('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', { failOnStatusCode: false })
    cy.wait(3000)
    cy.get('p').contains('Sign up').click()
    cy.wait(3000)
  })

  it('TC1-1', () => {
    cy.get('input[name="phone"]').type('0979274474')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    expect(cy.get('p').contains('Required')).to.exist
  })
  it('TC1-2', () => {
    cy.get('input[name="email"]').type('myoldtest@gmail.com')
    cy.get('input[name="phone"]').type('0979274474')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    cy.wait(1000)
    expect(cy.get('p').contains('This email is already registered.')).to.exist
  })
  it('TC1-3', () => {
    cy.get('input[name="email"]').type('mytest1@gmail.com')
    cy.get('input[name="phone"]').type('0979274474')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    cy.wait(1000)
    expect(cy.get('p').contains('Sign up Successful')).to.exist
  })
  it('TC1-4', () => {
    cy.get('input[name="email"]').type('mytest2@gmail.com')
    cy.get('input[name="phone"]').type('0958762543')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    cy.wait(1000)
    expect(cy.get('p').contains('Sign up Successful')).to.exist
  })
  it('TC1-5', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    expect(cy.get('p').contains('Required')).to.exist
  })
  it('TC1-6', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="phone"]').type('095876254')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    cy.wait(1000)
    expect(cy.get('p').contains('This email is already registered.')).to.exist
  })
  it('TC1-7', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="phone"]').type('09587625434')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    cy.wait(1000)
    expect(cy.get('p').contains('This email is already registered.')).to.exist
  })
  it('TC1-8', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="phone"]').type('095+8762543')
    cy.get('input[name="password"]').type('mypassword')
    cy.get('button[type="submit"]').contains('Sign up').click()
    expect(cy.get('p').contains('An phone number must contain 10 characters.')).to.exist
  })
  it('TC1-9', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="phone"]').type('0958762543')
    cy.get('button[type="submit"]').contains('Sign up').click()
    expect(cy.get('p').contains('Required')).to.exist
  })
  it('TC1-10', () => {
    cy.get('input[name="email"]').type('mytest3@gmail.com')
    cy.get('input[name="phone"]').type('0958762543')
    cy.get('input[name="password"]').type('mpw')
    cy.get('button[type="submit"]').contains('Sign up').click()
    expect(cy.get('p').contains('An password must contain at least 6 characters.')).to.exist
  })
})
