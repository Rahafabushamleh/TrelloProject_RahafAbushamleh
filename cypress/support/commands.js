/// <reference types="cypress" />
import { APIKey,APIToken } from "./contants.cy"
import dataUtils from "./dataUtils.cy"
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


Cypress.Commands.add('loginToTrello', (email, password) => { 
    cy.intercept("https://trello.com/1/resources/templates/categories").as("categories")
    cy.visit("/login")
    cy.get("#username").type("rahaf.abushamleh@gmail.com")
    cy.get("#login-submit").click()
    cy.wait(1500)
    cy.get("#password").type("rahaf2002"+"{enter}")
    cy.wait(4000)
}
    )


Cypress.Commands.add('findByTestId', (testid) => { 
    cy.get(`[data-testid = ${testid}]`)
})

Cypress.Commands.add('getBoards', (workspaceId) => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/organizations/${workspaceId}/boards?key=${APIKey}&token=${APIToken}`,
    });
  });


let boardId;
const dataUtil=new dataUtils()
Cypress.Commands.add('deleteAllBoards', (workspaceId) => {
    cy.getBoards(workspaceId)
      .then((response) => {
        response.body.forEach(board => {
          const boardId = board.id;
          dataUtil.deleteBoard(boardId)
        });
      });
  });

  Cypress.Commands.add('clicksOnCardName',(cardName)=>{
    cy.findByTestId('card-name').contains(cardName).click()
})
    
 
