describe('Switch de teste Cypress Ecoleta', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Navega e volta para a página inicial', () => {
    cy.get('a[href^="/crea"]').click()
    cy.get('div header a').should('have.text', 'Voltar para Home')
    cy.contains('header a', 'Voltar para Home').click()
    cy.get('a strong').should('have.text', 'Cadastre um ponto de coleta.')
  })

  it('Cadastrar um ponto de coleta', () => {
    cy.get('a[href*="ate"').click()
    cy.fillMandatoryFieldAndSubmit()
    cy.get('ul li img[alt$="das"]').click()
    cy.get('ul li img[alt*="leo"]').click()
    cy.contains('button', 'Cadastrar Ponto de Coleta').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Ponto de Coleta Criado com Sucesso!!')
    })
  })
})