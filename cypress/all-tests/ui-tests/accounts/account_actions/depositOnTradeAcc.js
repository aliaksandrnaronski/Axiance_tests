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

    it('Deposit on TA', () => {
        cy.get('@loginData').then((loginData) => {
            /*cy.log('WHEN User goes to the Login page')
            LoginPage.open()
            cy.log('AND Clicks sign in button')
            LoginPage.clickSignIn()
            cy.log('AND Clicks FSA button')
            LoginPage.clickFSAIcon()*/
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
            //TradeAccPage.clickButtonSwitch();
            cy.log('AND Click deposit button')
            TradeAccPage.clickButtonDeposit();
            cy.log('AND Find field for summ')
            TradeAccPage.searchDepositText.contains("Deposit Funds").should("exist");
            cy.log('AND Enter deposit summ')
            TradeAccPage.enterSumm();
            cy.log('THEN Check that deposit was successful')
            TradeAccPage.searchSuccess.contains("Your deposit was successful!");
            cy.log('AND Click button "Go to platform"')
            TradeAccPage.clickButtonGoToPlatform();
            cy.log('THEN Check that we are back on the dashboard')
            TradeAccPage.searchContainer.should("not.exist");
        })
    })
})