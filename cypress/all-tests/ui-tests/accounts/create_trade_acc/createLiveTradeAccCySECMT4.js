import LoginPage from "../../../../page-objects/loginPage";
import TradeAccPage from "../../../../page-objects/tradeAccPage";
import tradeAccData from "../../../../fixtures/tradeAccs.json";
import Chance from 'chance';
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
        cy.log('WHEN User goes to the Login page')
        LoginPage.open()
        cy.log('AND Clicks sign in button')
        LoginPage.clickSignIn()
        cy.log('AND Clicks CYSEC button')
        LoginPage.clickCySECIcon()})

    it('New url', () => {
        cy.get('@loginData').then((loginData) => {
            cy.log('THEN User goes to the CYSEC Login page')
            LoginPage.openNewUrlCySEC()
            cy.log('AND Enter email CYSEC and password(valid data)')
            LoginPage.login(loginData.emailCySEC, loginData.password)
            cy.log('THEN Check that the user has logged in')
            LoginPage.checkSideBarExist()
            cy.log('AND Click accounts tab')
            TradeAccPage.clickAccountsTab();
            cy.log('AND Click button "Create trade acc"')
            TradeAccPage.clickCreateAccButton();
            cy.log('AND Click demo tab')
            TradeAccPage.clickLiveTradeAcc();
            cy.log('AND Click on platform dropdown')
            TradeAccPage.clickChoosePlatform();
            cy.log('AND Choose MT4 platform')
            TradeAccPage.clickPlatformMT4();
            cy.log('AND Choose random leverage')
            let randomLeverageCySEC = chance.pickone(tradeAccData.leveragesCySEC).leverage
            TradeAccPage.pickRandomLeverageCYSEC(randomLeverageCySEC)
            //cy.chooseRandomLeveragesCySEC();
            cy.log('AND Choose random amount and currency')
            let randomCurrency = chance.pickone(tradeAccData.currency).shortName
            TradeAccPage.pickRandomCurrency(randomCurrency)
            //cy.chooseRandomAmountAndCurrency();
            cy.log('AND Enter TA password')
            //TradeAccPage.enterTradeAccPassword();
        })
    })
})