class LoginPage {
    get searchButtonSignIn(){
        return cy.get('.css-1m5rymt.e1w14daj6')
    }
    get searchFSAIcon(){
        return cy.get('[src="https://images.prismic.io/axiance/ODY5YTcwNTAtYjg2Ny00MjMxLWJhNTktNTAxOWYwY2RiN2Yx_68936e02-afac-41cc-a78d-8f15f3bf20ac_group4163.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]')
    }
    get searchCySECIcon(){
        return cy.get('[src="https://images.prismic.io/axiance/ODY5YTcwNTAtYjg2Ny00MjMxLWJhNTktNTAxOWYwY2RiN2Yx_68936e02-afac-41cc-a78d-8f15f3bf20ac_group4163.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]')
    }
    get searchEmailInput(){
        return cy.get('#email')
    }
    get searchPasswordInput(){
        return cy.get('#password')
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
        cy.visit('https://client.axiance.com/int/sign-in?', {failOnStatusCode: false})
    }
    openNewUrlCySEC(){
        cy.visit('https://client.axianceeu.com/sign-in?', {failOnStatusCode: false})
    }
    login(email,password){
        this.searchEmailInput.type(`${email}{enter}`);
        this.searchPasswordInput.type(`${password}{enter}`);
    }
    checkSideBarExist(){
        return cy.get('.styles_sidebar__8-r_L').should("be.visible")
    }
    checkErrorMessageExist(){
        return cy.get('.style_default__1exWx.style_s12__2GuCl').should("be.visible")
    }
}
export default new LoginPage()