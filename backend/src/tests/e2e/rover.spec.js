describe('Mars Rover E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow user to input commands and see rover movement', () => {
    cy.get('[data-testid="command-input"]').type('MMLR');
    cy.get('[data-testid="execute-button"]').click();
    cy.get('[data-testid="rover-position"]').should(
      'contain',
      'x: -1, y: 2, direction: N',
    );
  });

  it('should display error for invalid commands', () => {
    cy.get('[data-testid="command-input"]').type('INVALID');
    cy.get('[data-testid="execute-button"]').click();
    cy.get('[data-testid="error-message"]').should('be.visible');
  });

  it('should update grid visualization correctly', () => {
    cy.get('[data-testid="command-input"]').type('MM');
    cy.get('[data-testid="execute-button"]').click();
    cy.get('[data-testid=""]').should('have.class', 'rover-position');
  });
});
