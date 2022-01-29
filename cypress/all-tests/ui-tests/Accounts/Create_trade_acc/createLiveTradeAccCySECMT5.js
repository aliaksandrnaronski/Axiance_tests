import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
describe('Create Trade Accs', () => {
    beforeEach(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    beforeEach(() => {
        cy.fixture('tradeAccs').then(data => {
            cy.wrap(data).as('tradeAccData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Positive: Login on CySEC with CySEC data', () => {
        LoginPage.open()
        //cy.wait(1000)
        LoginPage.clickSignIn()
        LoginPage.clickCySECIcon()})

    it('New url', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.openNewUrlCySEC()
            LoginPage.login(loginData.emailCySEC, loginData.password)
            LoginPage.searchSideBar()
            TradeAccPage.clickAccountsTab();
            TradeAccPage.clickCreateAccButton();
            TradeAccPage.clickLiveTradeAcc();
            TradeAccPage.clickChoosePlatform();
            TradeAccPage.clickPlatformMT5();
            cy.chooseRandomLeveragesCySEC();
            cy.chooseRandomCurrency();
            //TradeAccPage.enterTradeAccPassword();
        })
    })
})