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

    it('Positive: Login on FSA with FSA data', () => {
        cy.get('@loginData').then((loginData) => {
            LoginPage.open()
            cy.wait(1000)
            LoginPage.clickSignIn()
            LoginPage.clickFSAIcon()
            LoginPage.openNewUrlFSA()
            LoginPage.login(loginData.emailFSA, loginData.password)
            LoginPage.searchSideBar()
        })
    })
})