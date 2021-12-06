import {
    accountsTab,
    accSettings, buttonChange,
    buttonDeposit,
    buttonSwitch,
    changePassword,
    createAccButton,
    depositFunds,
    inputEmail, inputEnterPassword,
    inputPassword,
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
        return cy.get(`${accountsTab}`).contains("Accounts")
    }
    AccountsTabClick(){
        this.searchAccountsTab.click();
    }
    get searchCreateAccButton(){
        return cy.get(`${createAccButton}`).contains("+ CREATE NEW ACCOUNT")
    }
    CreateAccButtonClick(){
        this.searchCreateAccButton.click();
    }
    get searchLiveTradeAcc(){
        return cy.get(`${typeTradeAcc}`).contains("Live Account")
    }
    LiveTradeAccClick(){
        this.searchLiveTradeAcc.click();
    }
    get searchDemoTradeAcc(){
        return cy.get(`${typeTradeAcc}`).contains("Demo Account")
    }
    DemoTradeAccClick(){
        this.searchDemoTradeAcc.click();
    }
    get searchChoosePlatform(){
        return cy.get(`${platformType}`)
    }
    ChoosePlatformClick(){
        this.searchChoosePlatform.click();
    }
    get searchPlatformMT4(){
        return cy.get(`${value}`).contains("MT4")
    }
    PlatformMT4Click(){
        this.searchPlatformMT4.click();
    }
    get searchPlatformMT5(){
        return cy.get(`${value}`).contains("MT5")
    }
    PlatformMT5Click(){
        this.searchPlatformMT5.click();
    }
    get searchPasswordInput(){
        return cy.get(`${tradeAccPasswordInput}`)
    }
    EnterTradeAccPassword(password){
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    get searchTabOpen(){
        return cy.get(`${tab}`).contains("Open Positions")
    }
    get searchTabPending(){
        return cy.get(`${tab}`).contains("Pending Orders")
    }
    get searchTabHistory(){
        return cy.get(`${tab}`).contains("Trading History")
    }
    get searchTabOpenActive(){
        return cy.get(`${tabActive}`).contains("Open Positions")
    }
    get searchTabPendingActive(){
        return cy.get(`${tabActive}`).contains("Pending Orders")
    }
    get searchTabHistoryActive(){
        return cy.get(`${tabActive}`).contains("Trading History")
    }
    TabOpenClick(){
        this.searchTabOpen.click();
    }
    TabPendingClick(){
        this.searchTabPending.click();
    }
    TabHistoryClick(){
        this.searchTabHistory.click();
    }
    get searchTabDemo(){
        return cy.get(`${tabLiveDemo}`).contains("Demo Accounts")
    }
    TabDemoClick(){
        this.searchTabDemo.click();
    }
    get searchButtonSwitch(){
        return cy.get(`${buttonSwitch}`)
    }
    ButtonSwitchClick(){
        this.searchButtonSwitch.click();
    }
    get searchButtonDeposit(){
        return cy.get(`${buttonDeposit}`)
    }
    ButtonDepositClick(){
        this.searchButtonDeposit.click();
    }
    get searchDepositText(){
        return cy.get(`${depositFunds}`).contains("Deposit Funds").should("exist")
    }
    get searchButtonSettings(){
        return cy.get(`${accSettings}`)
    }
    ButtonSettingsClick(){
        this.searchButtonSettings.click();
    }
    get searchChangePassword(){
        return cy.get(`${changePassword}`)
    }
    ChangePasswordClick(){
        this.searchChangePassword.click();
    }
    get searchTextChangeYourPassword(){
        return cy.get(`${textChangeYourPassword}`).contains("Change Your Password")
    }
    get searchNewPasswordInput(){
        return cy.get(`${inputPassword}`)
    }
    get searchEnterPasswordInput(){
        return cy.get(`${inputEnterPassword}`)
    }
    newPassword(password1,password2){
        this.searchNewPasswordInput.type(`${password1}{enter}`);
        this.searchEnterPasswordInput.type(`${password2}{enter}`);
    }
    get searchButtonChange(){
        return cy.get(`${buttonChange}`)
    }
    ButtonChangeClick(){
        this.searchButtonChange.click();
    }
    get searchSummField(){
        return cy.get(`${summField}`)
    }
    SummField(){
        this.searchSummField.type(`10000{enter}`);
    }
    get searchSuccess(){
        return cy.get(`${success}`).contains("Your deposit was successful!")
    }

}
export default new TradeAccPage()