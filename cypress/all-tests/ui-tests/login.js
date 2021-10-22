describe('Login', () => {
    beforeEach(() => {
        cy.fixture('sign_in').then(data => {
            cy.wrap(data).as('loginData')
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Login on FSA with FSA data', () => {
        cy.get('@loginData').then((loginData) => {

            //cy.visit('https://axiance.com')
            cy.visit('https://client.axiance.com/int/sign-in?', {failOnStatusCode: false})
            //cy.wait(5000)
            /*cy.get('span[class="css-0 e1w14daj5"]').contains("Sign In").click()
            cy.get('img[src="https://images.prismic.io/axiance/ZDQ2MzNkNDUtNzZlYS00OTYwLTk0MTItYWQ4OWU1NmM5YjNl_6b22d204-7c05-44cb-b794-8be2346bc3c8_group4159.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]').click()
            cy.get('a[href="https://client.axiance.com/int/sign-in?"]').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink, {failOnStatusCode: false});
            })*/
            cy.get('input[placeholder="Enter your Email*"]').type(`${loginData.emailFSA}`)
            cy.get('input[placeholder="Enter your Password*"]').type(`${loginData.password}`)
            cy.get('button[class="style_button__1T3Pb styles_submitButton__GzMWF style_primaryButton__1rnO5 style_mediumButton__1Uchs style_buttonText__1K857 style_heightButtonBig___LoXM"]').click()
            cy.wait(10000)
            cy.get('div[class="styles_sidebar__8-r_L"]').should('exist')
        })
    })

    it('Positive: Login on CySEC with CySEC data', () => {
        cy.get('@loginData').then((loginData) => {

            //cy.visit('https://axiance.com')
            cy.visit('https://client.axianceeu.com/sign-in?', {failOnStatusCode: false})
            //cy.wait(5000)
            /*cy.get('span[class="css-0 e1w14daj5"]').contains("Sign In").click()
            cy.get('img[src="https://images.prismic.io/axiance/ODY5YTcwNTAtYjg2Ny00MjMxLWJhNTktNTAxOWYwY2RiN2Yx_68936e02-afac-41cc-a78d-8f15f3bf20ac_group4163.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]').click()
            cy.get('a[href="https://client.axianceeu.com/sign-in?"]').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink, {failOnStatusCode: false});
            })*/
            cy.get('input[placeholder="Enter your Email*"]').type(`${loginData.emailCySEC}`)
            cy.get('input[placeholder="Enter your Password*"]').type(`${loginData.password}`)
            cy.get('button[class="style_button__1T3Pb styles_submitButton__GzMWF style_primaryButton__1rnO5 style_mediumButton__1Uchs style_buttonText__1K857 style_heightButtonBig___LoXM"]').click()
            cy.wait(10000)
            cy.get('div[class="styles_sidebar__8-r_L"]').should('exist')
        })
    })

    it('Negative: Login on CySEC with FSA data', () => {
        cy.get('@loginData').then((loginData) => {

            //cy.visit('https://axiance.com')
            cy.visit('https://client.axianceeu.com/sign-in?', {failOnStatusCode: false});
            //cy.wait(5000)
            /*cy.get('span[class="css-0 e1w14daj5"]').contains("Sign In").click()
            cy.get('img[src="https://images.prismic.io/axiance/ODY5YTcwNTAtYjg2Ny00MjMxLWJhNTktNTAxOWYwY2RiN2Yx_68936e02-afac-41cc-a78d-8f15f3bf20ac_group4163.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]').click()
            cy.get('a[href="https://client.axianceeu.com/sign-in?"]').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink, {failOnStatusCode: false});
            })*/
            cy.get('input[placeholder="Enter your Email*"]').type(`${loginData.emailFSA}`)
            cy.get('input[placeholder="Enter your Password*"]').type(`${loginData.password}`)
            cy.get('button[class="style_button__1T3Pb styles_submitButton__GzMWF style_primaryButton__1rnO5 style_mediumButton__1Uchs style_buttonText__1K857 style_heightButtonBig___LoXM"]').click()
            cy.get('span[class="style_default__1exWx  style_s12__2GuCl style_h14__38lFw "]').should('exist')
        })
    })

    it('Negative: Login on FSA with CySEC data', () => {
        cy.get('@loginData').then((loginData) => {

            //cy.visit('https://axiance.com')
            cy.visit('https://client.axiance.com/int/sign-in', {failOnStatusCode: false})
            //cy.wait(5000)
            /*cy.get('span[class="css-0 e1w14daj5"]').contains("Sign In").click()
            cy.get('img[src="https://images.prismic.io/axiance/ZDQ2MzNkNDUtNzZlYS00OTYwLTk0MTItYWQ4OWU1NmM5YjNl_6b22d204-7c05-44cb-b794-8be2346bc3c8_group4159.png?ixlib=gatsbyFP&q=50&auto=compress%2Cformat&rect=0%2C0%2C92%2C92&w=92&h=92"]').click()
            cy.get('a[href="https://client.axiance.com/int/sign-in?"]').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink, {failOnStatusCode: false});
            })*/
            cy.get('input[placeholder="Enter your Email*"]').type(`${loginData.emailCySEC}`)
            cy.get('input[placeholder="Enter your Password*"]').type(`${loginData.password}`)
            cy.get('button[class="style_button__1T3Pb styles_submitButton__GzMWF style_primaryButton__1rnO5 style_mediumButton__1Uchs style_buttonText__1K857 style_heightButtonBig___LoXM"]').click()
            cy.get('span[class="style_default__1exWx  style_s12__2GuCl style_h14__38lFw "]').should('exist')
        })
    })
})