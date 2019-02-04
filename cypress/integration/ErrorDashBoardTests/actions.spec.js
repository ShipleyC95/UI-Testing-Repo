context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://errorlog-bucket.s3-website.eu-west-2.amazonaws.com/')
    })
it("selects each message and display each stack trace", () => {
  cy.get('#accordion__title-0')
})
})