import Chance from 'chance'
import SearchResultsPage from '../../page-objects/searchResultsPage'
import AccessoriesPage from '../../page-objects/accessoriesPage'

describe('Test fors] reqres', () => {
    it('Positive: Search', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://store.google.com/us/?hl=en-US')
        cy.get('a[class="pwBZMd gn5mEf uFvxge"]').click()
        cy.get('input[aria-label="Search Google Store"]').type(`Google Pixelbook Pen Replacement Tips{enter}`)
        cy.get('a[href="/product/google_pixelbook_pen_replacement_tips"]').should('exist')
    })
})

describe('UI Tests', () => {
    before(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Positive: Search', () => {
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open()
            cy.log("WHEN User search product by name")
            AccessoriesPage.perfomSearch(productData.name)
            cy.log("Search results")
            SearchResultsPage.getProductByDocId(productData.url).should('exist')
        })
    })
})




