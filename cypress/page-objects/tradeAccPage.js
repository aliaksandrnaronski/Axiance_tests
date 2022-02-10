class TradeAccPage {
    get searchAccountsTab(){
        return cy.get('.styles_itemText__2niJC')
    }
    get searchCreateAccButton(){
        return cy.get('.style_button__1T3Pb.styles_button__3c_TI')
    }
    get searchTypeTradeAcc(){
        return cy.get('.style_checkboxText__GvthB')
    }
    get searchChoosePlatform(){
        return cy.get('#platformType')
    }
    get searchPlatform(){
        return cy.get('.css-13vhyk2-option')
    }
    get searchPasswordInput(){
        return cy.get('.style_wrapperInput__36oUg')
    }
    get searchTab(){
        return cy.get('.styles_tabHeader__3Rgp7.styles_tabHeader__3fJiL')
    }
    get searchActiveTab(){
        return cy.get('.styles_tabHeader__3Rgp7.styles_tabHeader__3fJiL.styles_activeTabHeader__2UHMA')
    }
    get searchTabDemo(){
        return cy.get('.styles_tabHeader__3Rgp7.styles_tabHeader__18jRo')
    }
    get searchButtonSwitch(){
        return cy.get('.style_button__1T3Pb.styles_switchButton__3wyvY')
    }
    get searchButtonDeposit(){
        return cy.get('.style_button__1T3Pb.styles_singleDepositButton__8VDwo')
    }
    get searchDepositText(){
        return cy.get('.style_default__1exWx.style_s20__38iJt')
    }
    get searchButtonSettings(){
        return cy.get('.styles_settingIcon__2__kK')
    }
    get searchChangePassword(){
        return cy.get('.styles_popOverButton__2It43')
    }
    get searchTextChangeYourPassword(){
        return cy.get('.style_default__1exWx.style_wb__2z8Ro.style_s20__38iJt')
    }
    get searchNewPasswordInput(){
        return cy.get('#password')
    }
    get searchRepeatPasswordInput(){
        return cy.get('#repeatedPassword')
    }
    get searchButtonChange(){
        return cy.get('.style_button__1T3Pb.styles_submitButton__3yTMy')
    }
    get searchSummField(){
        return cy.get('#summ')
    }
    get searchSuccess(){
        return cy.get('.styles_popUpContentTitle__1rcnr')
    }
    get searchButtonGoToPlatform(){
        return cy.get('.style_button__1T3Pb.styles_popUpContentButton__gjZCm')
    }
    get searchContainer(){
        return cy.get('.styles_container__1O3h2')
    }
    amount= '#amount'
    leverage= '#leverage'
    currency= '#currency'
    value= '.css-13vhyk2-option'

    clickAccountsTab(){
        this.searchAccountsTab.contains("Accounts").click();
    }
    clickCreateAccButton(){
        this.searchCreateAccButton.contains("+ CREATE NEW ACCOUNT").click();
    }
    clickLiveTradeAcc(){
        this.searchTypeTradeAcc.contains("Live Account").click();
    }
    clickDemoTradeAcc(){
        this.searchTypeTradeAcc.contains("Demo Account").click();
    }
    clickChoosePlatform(){
        this.searchChoosePlatform.click();
    }
    clickPlatformMT4(){
        this.searchPlatform.contains("MT4").click();
    }
    clickPlatformMT5(){
        this.searchPlatform.contains("MT5").click();
    }
    enterTradeAccPassword(password){
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    clickTabOpen(){
        this.searchTab.contains("Open Positions").click();
    }
    clickTabPending(){
        this.searchTab.contains("Pending Orders").click();
    }
    clickTabHistory(){
        this.searchTab.contains("Trading History").click();
    }
    clickTabDemo(){
        this.searchTabDemo.contains("Demo accounts").click();
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
        this.searchRepeatPasswordInput.type(`${password2}{enter}`);
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
    pickRandomLeverageFSA(randomLeverageFSA){
        //let randomLeverageFSA = chance.pickone(tradeAccData.leveragesFSA).leverage
        cy.get(`${(this.leverage)}`).click()
        cy.get(`${(this.value)}`).contains(randomLeverageFSA).click()
    }
    pickRandomLeverageCYSEC(randomLeverageCySEC){
        cy.get(`${(this.leverage)}`).click()
        cy.get(`${(this.value)}`).contains(randomLeverageCySEC).click()
    }
    /*pickRandomLeverageProfCYSEC(randomLeverageProfCySEC){
        //let randomLeverageProfCySEC = chance.pickone(tradeAccData.leveragesProfCySEC).leverage
        cy.get(`${(this.leverage)}`).click()
        cy.get(`${(this.value)}`).contains(randomLeverageProfCySEC).click()
    }*/
    pickRandomCurrency(randomCurrency){
        cy.get(`${(this.currency)}`).click()
        cy.get(`${(this.value)}`).contains(randomCurrency).click()
    }
    pickRandomAmountAndCurrency(randomAmount, randomCurrency){
        cy.get(`${(this.currency)}`).click()
        cy.get(`${(this.value)}`).contains(randomCurrency).click()
        cy.get(`${(this.amount)}`).click()
        cy.get(`${(this.value)}`).contains(randomAmount+" "+randomCurrency).click()
    }

}
export default new TradeAccPage()