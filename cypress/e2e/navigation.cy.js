/* eslint-disable no-undef */
describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('shows the nav bar with logo, delivery/pickup toggle, address field, cart icon, and signin/create account buttons', () => {
    cy.getByData('header').should('be.visible');

    cy.getByData('logo').should('be.visible');
    cy.get('.toggle-container').should('be.visible');
    cy.getByData('address-btn').should('be.visible')
    cy.get('.cart-btn').should('be.visible')
    cy.getByData('signup-button').should('be.visible')
    cy.getByData('signin-button').should('be.visible')
  });

  it('displays a card when you click on the cart icon', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.food-shopping-cart-icon').click();
    /* ==== End Cypress Studio ==== */
  })
});
