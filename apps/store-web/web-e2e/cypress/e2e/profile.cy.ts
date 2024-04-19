describe('profile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', { failOnStatusCode: false })
    cy.wait(2000)
    cy.get('p').contains('Sign in').click()
    cy.get('input[name="email"]').type('fortest@gmail.com')
    cy.get('input[name="password"]').type('ForTest123')
    cy.get('button[type="submit"]').contains('Sign in').click()
    cy.wait(1000)
    cy.reload()
    cy.wait(1000)
    cy.visit('http://localhost:3000/profile/edit', { failOnStatusCode: false })
    cy.wait(2000)
    cy.get('input[name="lastName"]').clear({ force: true })
    cy.get('input[name="firstName"]').clear({ force: true })
    cy.get('input[name="province"]').clear({ force: true })
    cy.get('textarea[name="bio"]').clear({ force: true })
  })
  afterEach(() => {
    cy.reload()
    cy.get('button > svg').first().click()
    cy.wait(500)
    cy.get('button').contains('Log out').click()
    cy.wait(1000)
    cy.reload()
  })

  it('TC2-1', () => {
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/images/pudding.jpg', {
      force: true,
    })
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('First name is required.')).to.exist
  })
  it('TC2-2', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('button[type="submit"]').contains('Save').click()
    cy.wait(1000)
    expect(cy.get('p').contains('Profile updated successfully')).to.exist
    cy.wait(5000)
  })
  it('TC2-3', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/images/food.jpg', {
      force: true,
    })
    cy.wait(3000)
    cy.get('button[type="submit"]').contains('Save').click()
    cy.wait(1000)
    expect(cy.get('p').contains('Profile updated successfully')).to.exist
  })
  it('TC2-4', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/images/pudding.jpg', {
      force: true,
    })
    cy.wait(1000)
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Last name is required.')).to.exist
  })

  it('TC2-5', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Test')
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Short bio must be at least 10 characters.')).to.exist
  })
  it('TC2-6', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/images/pudding.jpg', {
      force: true,
    })
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Short bio must be at least 10 characters.')).to.exist
  })
  it('TC2-7', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type(
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.`
    )
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Short bio must not exceed 150 characters.')).to.exist
  })
  it('TC2-8', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('input[name="province"]').type('Bangkok')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/documents/cable-company.cpp', {
      force: true,
    })
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Invalid file type')).to.exist
  })
  it('TC2-9', () => {
    cy.get('input[name="firstName"]').type('Fahphon')
    cy.get('input[name="lastName"]').type('Jaidee')
    cy.get('textarea[name="bio"]').type('Wakanda Forever')
    cy.get('input[type = "file"]').selectFile('cypress/fixtures/images/pudding.jpg', {
      force: true,
    })
    cy.get('button[type="submit"]').contains('Save').click()
    expect(cy.get('p').contains('Province is required.')).to.exist
  })
})
