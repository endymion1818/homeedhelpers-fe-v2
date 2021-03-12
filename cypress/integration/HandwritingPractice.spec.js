describe("<HandwritingPractice />", () => {
  beforeEach(() => {
    cy.visit("/handwriting-practice-paper");
  });

  describe("When you visit the handwriting practice page", () => {
    it("Should allow you to type a new message into the print area", () => {
      const message = "new message";
      cy.get("[data-cy=textarea]").type(message);
      cy.get("[data-cy=printarea]").contains(message);
    });
  });
});
