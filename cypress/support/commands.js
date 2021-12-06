// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import {amount, currency, leverage, value} from "../locators";
import Chance from 'chance';

Cypress.Commands.add('chooseRandomLeveragesFSA', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomLeverageFSA = chance.pickone(tradeAccData.leveragesFSA.map(function (e) {
            return e.leverage;
        }))
        cy.get(`${leverage}`).click()
        cy.get(`${value}`).contains(randomLeverageFSA).click()
    })
})

Cypress.Commands.add('chooseRandomLeveragesCySEC', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomLeverageCySEC = chance.pickone(tradeAccData.leveragesCySEC.map(function (e) {
            return e.leverage;
        }))
        cy.get(`${leverage}`).click()
        cy.get(`${value}`).contains(randomLeverageCySEC).click()
    })
})

Cypress.Commands.add('chooseRandomLeveragesProfCySEC', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomLeverageProfCySEC = chance.pickone(tradeAccData.leveragesProfCySEC.map(function (e) {
            return e.leverage;
        }))
        cy.get(`${leverage}`).click()
        cy.get(`${value}`).contains(randomLeverageProfCySEC).click()
    })
})

Cypress.Commands.add('chooseRandomCurrency', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomCurrency = chance.pickone(tradeAccData.currency.map(function (e) {
            return e.shortName;
        }))
        cy.get(`${currency}`).click()
        cy.get(`${value}`).contains(randomCurrency).click()
    })
})

Cypress.Commands.add('chooseRandomAmount', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomAmount = chance.pickone(tradeAccData.amounts.map(function (e) {
            return e.amount;
        }))
        cy.get(`${amount}`).click()
        cy.get(`${value}`).contains(randomAmount).click()
    })
})

Cypress.Commands.add('chooseRandomAmountAndCurrency', () => {
    cy.fixture("tradeAccs.json").as('tradeAccData').then((tradeAccData) => {
        let randomAmount = chance.pickone(tradeAccData.amounts.map(function (e) {
            return e.amount;
        }))
        let randomCurrency = chance.pickone(tradeAccData.currency.map(function (e) {
            return e.shortName;
        }))
        cy.get(`${currency}`).click()
        cy.get(`${value}`).contains(randomCurrency).click()
        cy.get(`${amount}`).click()
        cy.get(`${value}`).contains(randomAmount+" "+randomCurrency).click()
    })
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

