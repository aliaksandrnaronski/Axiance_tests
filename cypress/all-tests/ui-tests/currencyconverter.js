import Chance from 'chance'
describe('Array Task #10', () => {
    before(() => {
        cy.fixture('currency').then(data => {
            cy.wrap(data).as('currencyData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('Array', () => {


        cy.get('@currencyData').then((currencyData) => {
            let random = chance.pickone(currencyData.rates.map(function(e) {
                return e.shortName;
            }))
            cy.log("Random currency")
            cy.log(random);
            cy.visit('https://www.xe.com/currencyconverter/')
            cy.get('input[id="midmarketToCurrency"]').click()
            //cy.get(`//div[text()=${random}]`).click()
            cy.get('div[class="base-combobox__ComboboxRootContainer-iyxb4f-2 eUGFci"]').find('ul li > div').contains(`${random}`).click();
            cy.get('button[type="submit"]').click({ force: true })
            cy.get('p[class="result__ConvertedText-sc-1bsijpp-0 gwvOOF"]').contains("1.00 US Dollar =").should("exist")
        })


    })
})
