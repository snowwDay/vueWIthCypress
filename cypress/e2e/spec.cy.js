describe('test spec', () => {
  it('visits home page', () => {
    cy.visit('index.html')
    cy.get('input').type('World')
  })
  it('visits counter and adds 1', () => {
    cy.visit('counter.html')
     cy.contains('Add 1').click()
  })
 
})