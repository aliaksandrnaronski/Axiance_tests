import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
describe('Create Trade Accs', () => {
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

    it('Create Live Trade Acc FSA', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open();
            //cy.wait(1000)
            LoginPage.clickSignIn();
            LoginPage.clickFSAIcon();
            LoginPage.openNewUrlFSA();
            LoginPage.login(loginData.emailFSA, loginData.password);
            LoginPage.searchSideBar();
            TradeAccPage.clickAccountsTab();
            TradeAccPage.clickCreateAccButton();
            TradeAccPage.clickDemoTradeAcc();
            TradeAccPage.clickChoosePlatform();
            TradeAccPage.clickPlatformMT4();
            cy.chooseRandomLeveragesFSA();
            cy.chooseRandomAmountAndCurrency();
            //TradeAccPage.enterTradeAccPassword();
        })
    })
})