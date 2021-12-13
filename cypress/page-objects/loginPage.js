import {
    buttonSignIn,
    cysecIcon,
    fsaIcon, input, inputEmail, inputPassword, loginData,
    newUrlCySEC,
    newUrlFSA,
    sideBar
} from "../locators";

class LoginPage {
    get searchButtonSignIn(){
        return cy.get(`${buttonSignIn}`).contains("Sign In").should("be.visible")
    }
    get searchFSAIcon(){
        return cy.get(`${fsaIcon}`).should("be.visible")
    }
    get searchCySECIcon(){
        return cy.get(`${cysecIcon}`).should("be.visible")
    }
    get searchEmailInput(){
        return cy.get(`${inputEmail}`)
    }
    get searchPasswordInput(){
        return cy.get(`${inputPassword}`)
    }

    open(){
        cy.visit(`${Cypress.env('axianceURL')}`);
    }
    signInClick(){
        this.searchButtonSignIn.click();
    }
    clickFSAIcon(){
        this.searchFSAIcon.click();
    }
    clickCySECIcon(){
        this.searchCySECIcon.click();
    }
    openNewUrlFSA(){
        cy.visit(`${newUrlFSA}`, {failOnStatusCode: false})
    }
    openNewUrlCySEC(){
        cy.visit(`${newUrlCySEC}`, {failOnStatusCode: false})
    }
    login(email,password){
        this.searchEmailInput.type(`${email}{enter}`);
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    searchSideBar(){
        return cy.get(`${sideBar}`).should("be.visible").should('exist')
    }
    enterWrongLoginData(){
        return cy.get(`${loginData}`).should("be.visible").should('exist')
    }
}
export default new LoginPage()