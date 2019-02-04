module.exports = {
    'Gets the playground, selects a radio button and presses submit': function(client) {
        client
        .url('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html')
        
        .click('input[id="option1"]')
        
        .click('input[type=submit]:nth-of-type(1)')
    },

    'Selects third option from the dropdown and submits': function(client) {
        client
        .url('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html')
        
        .click('select:nth-of-type(1)')
        
        .click('option[value="option3"]')
    },

    'Assert the third option in the product descriptions is correct': function(client) {
        client
        .url('https://s3.eu-west-2.amazonaws.com/adddrugdialog/index.html')
        
        .click('a:nth-of-type(1)')

        .assert.containsText('li:nth-of-type(3)', 'Option 3 - Middle-tier but is okay')
    }
}