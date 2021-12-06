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

    it('Negative: Login on CySEC with wrong CySEC data', () => {
        LoginPage.open()
        LoginPage.signInClick()
        LoginPage.CySECIconClick()
    })

    it('New url', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.openNewUrlCySEC()
            LoginPage.login(loginData.wrongemailCySEC, loginData.password)
            LoginPage.WrongLoginData()
        })
    })
})

