describe("Knowledge Base Application", () => {
  it("Shows a placeholder", () => {
    cy.visit("/");
    cy.get(".button").should("have.text", "Coming Soon...");
  });
});
