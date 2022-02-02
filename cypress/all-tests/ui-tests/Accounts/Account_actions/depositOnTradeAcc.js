import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
describe('Switch to this acc and deposit', () => {
    before(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Switch to this acc and deposit', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open();
            //cy.wait(1000)
            LoginPage.clickSignIn();
            LoginPage.clickFSAIcon();
            LoginPage.openNewUrlFSA();
            LoginPage.login(loginData.emailFSAforActions, loginData.password);
            LoginPage.searchSideBar();
            TradeAccPage.clickAccountsTab();
            TradeAccPage.clickTabDemo();
            //TradeAccPage.clickButtonSwitch();
            TradeAccPage.clickButtonDeposit();
            TradeAccPage.searchDepositText;
            TradeAccPage.enterSumm();
            TradeAccPage.searchSuccess;
            TradeAccPage.clickButtonGoToPlatform();
            TradeAccPage.searchContainer;
        })
        // todo разбить на два теста checkSwitchingBetweenTradeAccs and checkDepositOnDemoTradeAcc
    })
})