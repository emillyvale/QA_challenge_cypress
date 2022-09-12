import './commands'
import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
  
});

cy.faker=require('faker-br');


