describe('My First Test', function() {
    it('Types a drug with autocomplete, adds a dosage, duration and submits it to the DOM', function() {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/AddDrug.html')
        cy.get('#drugInput').type('atar');

        cy.get('#drugInputautocomplete-list').click()

        cy.get('#drugInput').should('have.value', 'Atarax  Tablets  25 mg')

        cy.get('#doseInput').type('One')

        cy.get('#doseInputautocomplete-list>div').eq(2).click()

        cy.get('#drugQuantity').type('36')

        cy.get('#duration').click()

        cy.get('#duration').should('have.value', '9')

        cy.get('#RxTypes').select('Repeat Dispensing')

        cy.get('#authorisedissuesno').type('6')

        cy.get('#submit').click()
        
        cy.get('#0Drug').should('exist');
    })
})

describe('My Second Test', function() {
    it('Adds two drugs to the DOM', function() {
        cy.visit('https://s3.eu-west-2.amazonaws.com/adddrugdialog/AddDrug.html')

        cy.get('#drugInput').type('atar');

        cy.get('#drugInputautocomplete-list').click()

        cy.get('#drugInput').should('have.value', 'Atarax  Tablets  25 mg')

        cy.get('#doseInput').type('One')

        cy.get('#doseInputautocomplete-list>div').eq(2).click()

        cy.get('#drugQuantity').type('36')
        
        cy.get('#duration').click()

        cy.get('#duration').should('have.value', '9')

        cy.get('#RxTypes').select('Repeat Dispensing')
        
        cy.get('#authorisedissuesno').type('6')

        cy.get('#submit').click()

        cy.get('#0Drug').should('exist');

        cy.get('#drugInput').type('apreso');

        cy.get('#drugInputautocomplete-list').click()

        cy.get('#drugInput').should('have.value', 'Apresoline  Tablets  25 mg')

        cy.get('#doseInput').type('One')

        cy.get('#doseInputautocomplete-list>div').eq(0).click()

        cy.get('#drugQuantity').type('28')
        
        cy.get('#duration').click()

        cy.get('#duration').should('have.value', '14')

        cy.get('#RxTypes').select('Repeat Dispensing')
        
        cy.get('#authorisedissuesno').type('6')

        cy.get('#submit').click()

        cy.get('#1Drug').should('exist');
    })
})