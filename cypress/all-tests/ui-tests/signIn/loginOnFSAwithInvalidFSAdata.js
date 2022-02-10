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
            cy.log('WHEN User goes to the Login page')
            LoginPage.open()
            cy.log('AND Clicks sign in button')
            LoginPage.clickSignIn()
            cy.log('AND Clicks FSA button')
            LoginPage.clickFSAIcon()
            cy.log('THEN User goes to the FSA Login page')
            LoginPage.openNewUrlFSA()
            cy.log('AND Enter email FSA and password(invalid data)')
            LoginPage.login(loginData.wrongemailFSA, loginData.password)
            cy.log('THEN Check that the user has not logged in')
            LoginPage.checkExistenceOfErrorMessage()
        })
    })
})