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
        return cy.get(`${buttonSignIn}`)
    }
    get searchFSAIcon(){
        return cy.get(`${fsaIcon}`)
    }
    get searchCySECIcon(){
        return cy.get(`${cysecIcon}`)
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
    clickSignIn(){
        this.searchButtonSignIn.contains("Sign In").should("be.visible").click();
    }
    clickFSAIcon(){
        this.searchFSAIcon.should("be.visible").click();
    }
    clickCySECIcon(){
        this.searchCySECIcon.should("be.visible").click();
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
    checkSideBarExist(){
        return cy.get(`${sideBar}`).should("be.visible").should('exist')
    }
    //todo переименовать enterWrongLoginData
    enterWrongLoginData(){
        return cy.get(`${loginData}`).should("be.visible").should('exist')
    }
}
export default new LoginPage()