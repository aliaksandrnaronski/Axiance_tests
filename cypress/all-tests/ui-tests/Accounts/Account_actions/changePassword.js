import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
describe('Switch to this acc and deposit', () => {
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

    it('Switch to this acc and deposit', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open();
            cy.wait(1000)
            LoginPage.signInClick();
            LoginPage.clickFSAIcon();
            LoginPage.openNewUrlFSA();
            LoginPage.login(loginData.emailFSAforActions, loginData.password);
            LoginPage.searchSideBar();
            TradeAccPage.AccountsTabClick();
            TradeAccPage.TabDemoClick();
            TradeAccPage.ButtonSettingsClick();
            TradeAccPage.ChangePasswordClick();
            TradeAccPage.searchTextChangeYourPassword;
            TradeAccPage.newPassword(loginData.new_password, loginData.enter_password);
            TradeAccPage.ButtonChangeClick();
        })
    })
})