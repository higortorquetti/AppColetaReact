/// <reference types="cypress" />

Cypress.Commands.add('fillMandatoryFieldAndSubmit', () => {
    cy.get('#name').type('Mercado Mirana')
    cy.get('#email').type('mercadomirana@mirana.com')
    cy.get('#whatsapp').type('898797789')
    cy.get('#uf').select('SP')
    cy.get('#city').select('Araçatuba')
})