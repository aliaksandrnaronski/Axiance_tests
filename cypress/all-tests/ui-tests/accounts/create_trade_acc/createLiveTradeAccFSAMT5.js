import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
import tradeAccData from "../../../../fixtures/tradeAccs.json";
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
            cy.log('WHEN User goes to the Login page');
            LoginPage.open();
            cy.log('AND Clicks sign in button');
            LoginPage.clickSignIn();
            cy.log('AND Clicks FSA button');
            LoginPage.clickFSAIcon();
            cy.log('THEN User goes to the FSA Login page');
            LoginPage.openNewUrlFSA();
            cy.log('AND Enter email FSA and password(valid data)');
            LoginPage.login(loginData.emailFSA, loginData.password);
            cy.log('THEN Check that the user has logged in');
            LoginPage.checkSideBarExist();
            cy.log('AND Click accounts tab')
            TradeAccPage.clickAccountsTab();
            cy.log('AND Click button "Create trade acc"')
            TradeAccPage.clickCreateAccButton();
            cy.log('AND Click demo tab')
            TradeAccPage.clickDemoTradeAcc();
            cy.log('AND Click on platform dropdown')
            TradeAccPage.clickChoosePlatform();
            cy.log('AND Choose MT5 platform')
            TradeAccPage.clickPlatformMT5();
            cy.log('AND Choose random leverage')
            let randomLeverageFSA = chance.pickone(tradeAccData.leveragesFSA).leverage
            TradeAccPage.pickRandomLeverageFSA(randomLeverageFSA)
            //cy.chooseRandomLeveragesFSA();
            cy.log('AND Choose random currency')
            let randomCurrency = chance.pickone(tradeAccData.currency).shortName
            TradeAccPage.pickRandomCurrency(randomCurrency)
            //cy.chooseRandomAmountAndCurrency();
            cy.log('AND Enter TA password')
            //TradeAccPage.enterTradeAccPassword();
        })
    })
})