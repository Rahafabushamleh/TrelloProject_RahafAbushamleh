/// <reference types="cypress" />

import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import deleteCardActions from "../../pageObjects/deleteCard/actions.cy";
import deleteCardAssertions from "../../pageObjects/deleteCard/assertions.cy";
import dataUtils from "../../support/dataUtils.cy";

const deleteCardAction=new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions()
const boardName ="Test Board"
const cardName="Test Card"
const dataUtil=new dataUtils
let boardId;
let listId;
let cardURL;

before(() => {
    dataUtil.createBoard(boardName).then((res) => {
        boardId = res.body.id;

        cy.loginToTrello();

         dataUtil.getListsInBoard(boardId);
    }).then((res) => {
        listId = res.body[0].id;

         dataUtil.createCard(listId, cardName);
    }).then((res) => {
        cardURL=res.body.url
    });
});


When("The user navigates to the card",()=>{
    deleteCardAction.openCard(cardURL)
})

When("The user clicks on the Archive button",()=>{
    deleteCardAction.clicksOnArchiveButton()
})

When("The user clicks on delete button",()=>{
    deleteCardAction.clicksOnDeleteButton()
})

When("The user confirms the deletion",()=>{
    deleteCardAction.confirmTheDeletion()
})

Then("The card should be deleted successfully",()=>{
  deleteCardAssertion.checkListIfCrdExist(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})