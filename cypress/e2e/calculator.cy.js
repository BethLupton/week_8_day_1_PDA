describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have the number buttons displaying the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should have the number arithmetical operations displaying the result of the operation', () => {
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should have multiple operations chained together', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('should show the output as expected for positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '18')
  })

  it('should show the output as expected for negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('should show the output as expected for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should show the output as expected for very large numbers', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1998')
  })

  it('should show code in exceptional circumstances', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })

})