import {
    accountsTab,
    accSettings, buttonChange,
    buttonDeposit, buttonGoToPlatform,
    buttonSwitch,
    changePassword, container,
    createAccButton,
    depositFunds, inputEnterPassword,
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
    get searchCreateAccButton(){
        return cy.get(`${createAccButton}`).contains("+ CREATE NEW ACCOUNT")
    }
    get searchLiveTradeAcc(){
        return cy.get(`${typeTradeAcc}`).contains("Live Account")
    }
    get searchDemoTradeAcc(){
        return cy.get(`${typeTradeAcc}`).contains("Demo Account")
    }
    get searchChoosePlatform(){
        return cy.get(`${platformType}`)
    }
    get searchPlatformMT4(){
        return cy.get(`${value}`).contains("MT4")
    }
    get searchPlatformMT5(){
        return cy.get(`${value}`).contains("MT5")
    }
    get searchPasswordInput(){
        return cy.get(`${tradeAccPasswordInput}`)
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
    get searchTabDemo(){
        return cy.get(`${tabLiveDemo}`).contains("Demo Accounts")
    }
    get searchButtonSwitch(){
        return cy.get(`${buttonSwitch}`)
    }
    get searchButtonDeposit(){
        return cy.get(`${buttonDeposit}`)
    }
    get searchDepositText(){
        return cy.get(`${depositFunds}`).contains("Deposit Funds").should("exist")
    }
    get searchButtonSettings(){
        return cy.get(`${accSettings}`)
    }
    get searchChangePassword(){
        return cy.get(`${changePassword}`)
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
    get searchButtonChange(){
        return cy.get(`${buttonChange}`)
    }
    get searchSummField(){
        return cy.get(`${summField}`)
    }
    get searchSuccess(){
        return cy.get(`${success}`).contains("Your deposit was successful!")
    }
    get searchButtonGoToPlatform(){
        return cy.get(`${buttonGoToPlatform}`)
    }
    get searchContainer(){
        return cy.get(`${container}`).should("not.exist")
    }

    AccountsTabClick(){
        this.searchAccountsTab.click();
    }
    CreateAccButtonClick(){
        this.searchCreateAccButton.click();
    }
    LiveTradeAccClick(){
        this.searchLiveTradeAcc.click();
    }
    DemoTradeAccClick(){
        this.searchDemoTradeAcc.click();
    }
    ChoosePlatformClick(){
        this.searchChoosePlatform.click();
    }
    PlatformMT4Click(){
        this.searchPlatformMT4.click();
    }
    PlatformMT5Click(){
        this.searchPlatformMT5.click();
    }
    EnterTradeAccPassword(password){
        this.searchPasswordInput.type(`${password}{enter}`);
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
    TabDemoClick(){
        this.searchTabDemo.click();
    }
    ButtonSwitchClick(){
        this.searchButtonSwitch.click();
    }
    ButtonDepositClick(){
        this.searchButtonDeposit.click();
    }
    ButtonSettingsClick(){
        this.searchButtonSettings.click();
    }
    ChangePasswordClick(){
        this.searchChangePassword.click();
    }
    newPassword(password1,password2){
        this.searchNewPasswordInput.type(`${password1}{enter}`);
        this.searchEnterPasswordInput.type(`${password2}{enter}`);
    }
    ButtonChangeClick(){
        this.searchButtonChange.click();
    }
    SummField(){
        this.searchSummField.type(`10000{enter}`);
    }
    ButtonGoToPlatformClick(){
        this.searchButtonGoToPlatform.click();
    }

}
export default new TradeAccPage()