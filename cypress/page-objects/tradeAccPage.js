import {
    accountsTab,
    createAccButton, platformType,
    tradeAccPasswordInput, typeTradeAcc, value
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
}
export default new TradeAccPage()