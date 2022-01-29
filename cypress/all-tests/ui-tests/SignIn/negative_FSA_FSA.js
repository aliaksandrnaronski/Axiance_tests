import LoginPage from "../../../page-objects/loginPage";
describe('Login', () => {
    before(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Negative: Login on FSA with wrong FSA data', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open()
            LoginPage.clickSignIn()
            LoginPage.clickFSAIcon()
            LoginPage.openNewUrlFSA()
            LoginPage.login(loginData.wrongemailFSA, loginData.password)
            LoginPage.enterWrongLoginData()
        })
    })
})