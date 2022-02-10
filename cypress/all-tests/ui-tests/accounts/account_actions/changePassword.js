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
            cy.log('WHEN User goes to the Login page')
            LoginPage.open()
            cy.log('AND Clicks sign in button')
            LoginPage.clickSignIn()
            cy.log('AND Clicks FSA button')
            LoginPage.clickFSAIcon()
            cy.log('THEN User goes to the FSA Login page')
            LoginPage.openNewUrlFSA()
            cy.log('AND Enter email FSA and password(valid data)')
            LoginPage.login(loginData.emailFSA, loginData.password)
            cy.log('THEN Check that the user has logged in')
            LoginPage.checkSideBarExist()
            cy.log('AND Click accounts tab')
            TradeAccPage.clickAccountsTab();
            cy.log('AND Click demo tab')
            TradeAccPage.clickTabDemo();
            cy.log('AND Click button settings for TA')
            TradeAccPage.clickButtonSettings();
            cy.log('AND Click Change password')
            TradeAccPage.clickChangePassword();
            cy.log('AND Search field for new password')
            TradeAccPage.searchTextChangeYourPassword.contains("Change Your Password");
            cy.log('AND Enter new password')
            TradeAccPage.enterNewPassword(loginData.new_password, loginData.enter_password);
            cy.log('AND Click button Change password')
            TradeAccPage.clickButtonChange();
        })
    })
})