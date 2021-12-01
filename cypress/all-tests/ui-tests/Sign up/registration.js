/*describe('Login', () => {
    beforeEach(() => {
        cy.fixture('sign_up').then(data => {
            cy.wrap(data).as('registration')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Registration on FSA from FSA', () => {
        cy.get('@registration').then((registration) => {

            //cy.visit('https://axiance.com')
            cy.visit('https://client.axiance.com/int/sign-up/live?', {failOnStatusCode: false});
            /*cy.wait(5000)
            cy.get('span[class="css-0 e1w14daj5"]').contains("Try Demo").click()
            cy.wait(5000)
            cy.get('img[src="https://images.prismic.io/axiance/ZDQ2MzNkNDUtNzZlYS00OTYwLTk0MTItYWQ4OWU1NmM5YjNl_6b22d204-7c05-44cb-b794-8be2346bc3c8_group4159.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]').click()
            cy.get('a[href="https://client.axiance.com/int/sign-up/live?"]').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink, {failOnStatusCode: false});
            })*/
           /* cy.get('input[placeholder="First Name*"]').type(`${registration.firstName}`)
            cy.get('input[placeholder="Last Name*"]').type(`${registration.lastName}`)
            cy.get('input[placeholder="Enter your Email*"]').type(`${registration.email}`)
            //cy.get('div[id="countryResidence"]').click()
            cy.get('input[class="styles_phoneInput__2G0Lp form-control"]').type(`${registration.phone}`)
            cy.get('input[placeholder="Enter your Password*"]').type(`${registration.password}`)
            cy.get('input[placeholder="Confirm your Password*"]').type(`${registration.password}`)
            //cy.get('input[placeholder="Promo Code (Optional)"]').type(`${registration.promo}`)
            cy.get('span[class="style_checkboxText__GvthB style_checkboxTextSmall__1Wq4D"]').contains("I have carefully read and understood the").click()
            cy.wait(10000)
            //cy.get('span[class="style_button__1T3Pb styles_submitButton__2ofqf style_primaryButton__1rnO5 style_largeButton__3_ayO style_buttonText__1K857 style_heightButtonBig___LoXM"]').click()

            //cy.get('div[class="styles_sidebar__8-r_L"]').should('exist')
        })
    })
})
*/