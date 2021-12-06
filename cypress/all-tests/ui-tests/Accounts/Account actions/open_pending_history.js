import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
describe('Open positions/Pending orders/trading', () => {
    before(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    before(() => {
        cy.fixture('tradeAccs').then(data => {
            cy.wrap(data).as('tradeAccData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Open positions/Pending orders/trading', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open();
            cy.wait(1000)
            LoginPage.signInClick();
            LoginPage.FSAIconClick();
            LoginPage.openNewUrlFSA();
            LoginPage.login(loginData.emailFSAforActions, loginData.password);
            LoginPage.SearchSideBar();
            TradeAccPage.AccountsTabClick();
            TradeAccPage.TabOpenClick();
            TradeAccPage.searchTabOpenActive;
            TradeAccPage.TabPendingClick();
            TradeAccPage.searchTabPendingActive;
            TradeAccPage.TabHistoryClick();
            TradeAccPage.searchTabHistoryActive;
        })
    })
})