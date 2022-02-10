import LoginPage from "../../../page-objects/loginPage";
describe('Login', () => {
    beforeEach(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Negative: Login on CySEC with FSA data', () => {
        cy.log('WHEN User goes to the Login page')
        LoginPage.open()
        cy.log('AND Clicks sign in button')
        LoginPage.clickSignIn()
        cy.log('AND Clicks CYSEC button')
        LoginPage.clickCySECIcon()
    })

    it('New url', () => {
        cy.get('@loginData').then((loginData) => {
            cy.log('THEN User goes to the CYSEC Login page')
            LoginPage.openNewUrlCySEC()
            cy.log('AND Enter email FSA and password(valid data)')
            LoginPage.login(loginData.emailFSA, loginData.password)
            cy.log('THEN Check that the user has not logged in')
            LoginPage.checkErrorMessageExist()
        })
    })
})


