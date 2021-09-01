import SearchResultsPage from './searchResultsPage'

class AccessoriesPage{
    open(){
        cy.visit(`${Cypress.env('googleURL')}/?hl=en-US`);
    }
    get searchIcon(){
        return cy.get('a[class="pwBZMd gn5mEf uFvxge"]')
    }
    get searchInput(){
        return cy.get('input[aria-label="Search Google Store"]')
    }
    perfomSearch(productToSearch){
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}
export default new AccessoriesPage()