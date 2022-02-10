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
            cy.log('AND Click open tab')
            TradeAccPage.clickTabOpen();
            cy.log('THEN Search active open tab')
            TradeAccPage.searchActiveTab.contains("Open Positions");
            cy.log('AND Click pending tab')
            TradeAccPage.clickTabPending();
            cy.log('THEN Search active pending tab')
            TradeAccPage.searchActiveTab.contains("Pending Orders");
            cy.log('AND Click history tab')
            TradeAccPage.clickTabHistory();
            cy.log('THEN Search active history tab')
            TradeAccPage.searchActiveTab.contains("Trading History");
        })
    })
})