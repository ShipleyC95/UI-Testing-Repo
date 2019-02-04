module.exports = {
    'Add drug test': function (client) {
        client
            .url('https://s3.eu-west-2.amazonaws.com/adddrugdialog/AddDrug.html')
            
            .setValue('input[id="drugInput"]', 'Atar')
            
            .click('div[id=drugInputautocomplete-list]')
            
            .setValue('input[id="doseInput"]', 'One')
            
            .click('div[class="Dose.Term"]:nth-of-type(3)')
            
            .setValue('input[id="drugQuantity"]', '36')
            
            .click('input[id="duration"]')
            
            .assert.value('input[id="duration"]', '9')
            
            .click('select[id="RxTypes"]')
            
            .click('option[id="repeatDispensing"]')
            
            .setValue('input[id="authorisedissuesno"]', '6')
            
            .click('input[id="submit"]')
            
            .assert.containsText('div[id="0Drug"]', 'Atarax Tablets 25 mg')
    },

    'Add two drugs': function (client) {
        client
            .url('https://s3.eu-west-2.amazonaws.com/adddrugdialog/AddDrug.html')

            .setValue('input[id="drugInput"]', 'Atar')

            .click('div[id=drugInputautocomplete-list]')

            .setValue('input[id="doseInput"]', 'One')

            .click('div[class="Dose.Term"]:nth-of-type(3)')

            .setValue('input[id="drugQuantity"]', '36')

            .click('input[id="duration"]')

            .assert.value('input[id="duration"]', '9')

            .click('select[id="RxTypes"]')

            .click('option[id="repeatDispensing"]')

            .setValue('input[id="authorisedissuesno"]', '6')

            .click('input[id="submit"]')

            .setValue('input[id="drugInput"]', 'apreso')

            .click('div[id=drugInputautocomplete-list]')

            .setValue('input[id="doseInput"]', 'One')

            .click('div[class="Dose.Term"]:nth-of-type(1)')

            .setValue('input[id="drugQuantity"]', '28')

            .click('input[id="duration"]')

            .assert.value('input[id="duration"]', '14')

            .click('select[id="RxTypes"]')

            .click('option[id="repeatDispensing"]')

            .setValue('input[id="authorisedissuesno"]', '6')
            
            .click('input[id="submit"]')

            .assert.containsText('div[id="0Drug"]', 'Atarax Tablets 25 mg')

            .assert.containsText('div[id="1Drug"]', 'Apresoline  Tablets  25 mg')
    }
}