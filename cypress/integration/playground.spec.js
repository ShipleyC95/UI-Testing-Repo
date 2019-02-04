describe('Tests for the HTML playground', function () {

    it('Gets the playground, selects a radio button and presses submit', function () {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html');
        cy.get('#option2').click();
        cy.get('input[type=submit]').eq(0).click();
    })

    it('Selects third option from the dropdown and submit', function () {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html');
        cy.get('select').select('Option 3')
        cy.get('input[type=submit]').eq(1).click();
    })

    it('Assert the third option in the product descriptions is correct', function () {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html');
        cy.get('ul>li').eq(2).should('have.text', 'Option 3 - Middle-tier but is okay')
    })

    it('Click buttons in the iframe and check captions', function () {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html');
        cy.get('iframe').then(function ($iframe) {
            var b = $iframe.contents().find('body')
            cy.wrap(b)
                .find('.active')
                .should('to.contain', 'Pretty Abstract Right');

            cy.wrap(b)
                .find('.right').click();

            cy.wrap(b)
                .find('.active')
                .should('to.contain', 'Oooh Space');

            cy.wrap(b)
                .find('.left').click();

            cy.wrap(b)
                .find('.active')
                .should('to.contain', 'Pretty Abstract Right');
        })
    })

    it('Calls the fake API and returns comments', function () {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html');
        cy.request('https://jsonplaceholder.typicode.com/comments/')
            .its('body')
            .should('include', jsonResponse)
    })
})


var jsonResponse = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}