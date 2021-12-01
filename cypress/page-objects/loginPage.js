import {
    buttonSignIn,
    cysecIcon,
    fsaIcon, input, inputEmail, inputPassword, loginData,
    newUrlCySEC,
    newUrlFSA,
    sideBar
} from "../locators";

class LoginPage {
    open(){
        cy.visit(`${Cypress.env('axianceURL')}`);
    }
    get searchButtonSignIn(){
        return cy.get(`${buttonSignIn}`).contains("Sign In").should("be.visible")
    }
    signInClick(){
        this.searchButtonSignIn.click();
    }
    get searchFSAIcon(){
        return cy.get(`${fsaIcon}`).should("be.visible")
    }
    FSAIconClick(){
        this.searchFSAIcon.click();
    }
    get searchCySECIcon(){
        return cy.get(`${cysecIcon}`).should("be.visible")
    }
    CySECIconClick(){
        this.searchCySECIcon.click();
    }
    openNewUrlFSA(){
        cy.visit(`${newUrlFSA}`, {failOnStatusCode: false})
    }
    openNewUrlCySEC(){
        cy.visit(`${newUrlCySEC}`, {failOnStatusCode: false})
    }
    get searchEmailInput(){
        return cy.get(`${inputEmail}`)
    }
    get searchPasswordInput(){
        return cy.get(`${inputPassword}`)
    }
    login(email,password){
        this.searchEmailInput.type(`${email}{enter}`);
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    SearchSideBar(){
        return cy.get(`${sideBar}`).should("be.visible").should('exist')
    }
    WrongLoginData(){
        return cy.get(`${loginData}`).should("be.visible").should('exist')
    }

}
export default new LoginPage()