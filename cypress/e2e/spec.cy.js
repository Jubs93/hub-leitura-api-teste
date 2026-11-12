describe('template spec', () => {
  it('passes', () => {
    cy.request('http://localhost:3000/api-docs/')
  })
})