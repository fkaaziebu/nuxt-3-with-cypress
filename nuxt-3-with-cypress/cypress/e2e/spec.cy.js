describe("Home Page", () => {
  it("Visit My Application", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username-input").type("frederickaziebu1998@gmail.com");
    cy.get("#password-input").type("1234");
    cy.get("#submit-button").click();
    cy.get("#success-message").should('be.visible')
  });
});
