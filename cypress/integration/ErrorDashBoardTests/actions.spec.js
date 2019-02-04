context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://errorlog-bucket.s3-website.eu-west-2.amazonaws.com/')
    })
    it('Calls the Errors API and returns errors', function () {
      cy.request('https://2bn5wtb48g.execute-api.eu-west-2.amazonaws.com/Beta')
          .its('body')
          .should('include', jsonResponse)
  })
})

var jsonResponse = {
  "Id":"06a63c80-8a9d-4cc0-9702-05219a5590fb",
  "Message":"Attempted to divide by zero.",
  "LogDateTime":"2018-12-11T15:03:45.733654Z",
  "Stacktrace":"   at Emis.CloudService.Tests.Aws.Rds.ErrorLoggerTests.Test() in C:\\Code\\BW\\Main\\EMIS Web\\Cross Domain\\CloudService\\Emis.CloudService.Tests\\Aws\\Rds\\ErrorLoggerTests.cs:line 26",
  "Category":"S3Upload",
  "CustomData":"ObjectName: 76c7f2d4-4da2-4c51-9e80-ac946e5d7873\r\nUser: MARSHALL, Andy (Mr)"
}