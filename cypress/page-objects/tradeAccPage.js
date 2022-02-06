import {
    accountsTab,
    accSettings, buttonChange,
    buttonDeposit, buttonGoToPlatform,
    buttonSwitch,
    changePassword, container,
    createAccButton,
    depositFunds, inputEnterPassword,
    inputPassword, leverage,
    platformType, success, summField,
    tab,
    tabActive,
    tabLiveDemo,
    textChangeYourPassword,
    tradeAccPasswordInput,
    typeTradeAcc,
    value
} from "../locators";

class TradeAccPage {
    get searchAccountsTab(){
        return cy.get(`${accountsTab}`)
    }
    get searchCreateAccButton(){
        return cy.get(`${createAccButton}`)
    }
    get searchLiveTradeAcc(){
        return cy.get(`${typeTradeAcc}`)
    }
    get searchDemoTradeAcc(){
        return cy.get(`${typeTradeAcc}`)
    }
    get searchChoosePlatform(){
        return cy.get(`${platformType}`)
    }
    get searchPlatformMT4(){
        return cy.get(`${value}`)
    }
    get searchPlatformMT5(){
        return cy.get(`${value}`)
    }
    get searchPasswordInput(){
        return cy.get(`${tradeAccPasswordInput}`)
    }
    get searchTabOpen(){
        return cy.get(`${tab}`)
    }
    get searchTabPending(){
        return cy.get(`${tab}`)
    }
    get searchTabHistory(){
        return cy.get(`${tab}`)
    }
    get searchTabOpenActive(){
        return cy.get(`${tabActive}`)
    }
    get searchTabPendingActive(){
        return cy.get(`${tabActive}`)
    }
    get searchTabHistoryActive(){
        return cy.get(`${tabActive}`)
    }
    get searchTabDemo(){
        return cy.get(`${tabLiveDemo}`)
    }
    get searchButtonSwitch(){
        return cy.get(`${buttonSwitch}`)
    }
    get searchButtonDeposit(){
        return cy.get(`${buttonDeposit}`)
    }
    get searchDepositText(){
        return cy.get(`${depositFunds}`)
    }
    get searchButtonSettings(){
        return cy.get(`${accSettings}`)
    }
    get searchChangePassword(){
        return cy.get(`${changePassword}`)
    }
    get searchTextChangeYourPassword(){
        return cy.get(`${textChangeYourPassword}`)
    }
    get searchNewPasswordInput(){
        return cy.get(`${inputPassword}`)
    }
    get searchEnterPasswordInput(){
        return cy.get(`${inputEnterPassword}`)
    }
    get searchButtonChange(){
        return cy.get(`${buttonChange}`)
    }
    get searchSummField(){
        return cy.get(`${summField}`)
    }
    get searchSuccess(){
        return cy.get(`${success}`)
    }
    get searchButtonGoToPlatform(){
        return cy.get(`${buttonGoToPlatform}`)
    }
    get searchContainer(){
        return cy.get(`${container}`)
    }

    clickAccountsTab(){
        this.searchAccountsTab.contains("Accounts").click();
    }
    clickCreateAccButton(){
        this.searchCreateAccButton.contains("+ CREATE NEW ACCOUNT").click();
    }
    clickLiveTradeAcc(){
        this.searchLiveTradeAcc.contains("Live Account").click();
    }
    clickDemoTradeAcc(){
        this.searchDemoTradeAcc.contains("Demo Account").click();
    }
    clickChoosePlatform(){
        this.searchChoosePlatform.click();
    }
    clickPlatformMT4(){
        this.searchPlatformMT4.contains("MT4").click();
    }
    clickPlatformMT5(){
        this.searchPlatformMT5.contains("MT5").click();
    }
    enterTradeAccPassword(password){
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    clickTabOpen(){
        this.searchTabOpen.contains("Open Positions").click();
    }
    clickTabPending(){
        this.searchTabPending.contains("Pending Orders").click();
    }
    clickTabHistory(){
        this.searchTabHistory.contains("Trading History").click();
    }
    clickTabDemo(){
        this.searchTabDemo.contains("Demo Accounts").click();
    }
    clickButtonSwitch(){
        this.searchButtonSwitch.click();
    }
    clickButtonDeposit(){
        this.searchButtonDeposit.click();
    }
    clickButtonSettings(){
        this.searchButtonSettings.click();
    }
    clickChangePassword(){
        this.searchChangePassword.click();
    }
    enterNewPassword(password1,password2){
        this.searchNewPasswordInput.type(`${password1}{enter}`);
        this.searchEnterPasswordInput.type(`${password2}{enter}`);
    }
    clickButtonChange(){
        this.searchButtonChange.click();
    }
    enterSumm(){
        this.searchSummField.type(`10000{enter}`);
    }
    clickButtonGoToPlatform(){
        this.searchButtonGoToPlatform.click();
    }

}
export default new TradeAccPage()