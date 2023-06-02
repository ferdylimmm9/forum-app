/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('input[placeholder="email"]').should('be.visible');
    cy.get('input[placeholder="password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });
  it('should display alert when email is empty', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });
  it('should display alert when password is empty', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="email"]').type('tanjiro11@gmail.com');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="email"]').type('tanjiro11@gmail.com');
    cy.get('input[placeholder="password"]').type('tanjirokun');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });
  it('should display homepage when email and password are correct', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="email"]').type('tanjiro11@gmail.com');
    cy.get('input[placeholder="password"]').type('123123');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('button').contains('Add Thread').should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});
