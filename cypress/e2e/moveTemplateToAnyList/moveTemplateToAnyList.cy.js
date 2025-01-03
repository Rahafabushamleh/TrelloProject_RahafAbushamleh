/// <reference types="cypress" />

import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import moveTemplateActions from "../../pageObjects/moveTemplateToAnyList/actions.cy";
import moveTemplateAssertions from "../../pageObjects/moveTemplateToAnyList/assertions.cy";
import dataUtils from "../../support/dataUtils.cy";


const moveTemplateAction=new moveTemplateActions()
const moveTemplateAssertion=new moveTemplateAssertions()

const boardName="my new board";
const templateName="my new template"
let boardURL;
let templateURL;
let listId;
let boardId;

const dataUtil=new dataUtils()
const listName="Doing{enter}"

before(() => {
    dataUtil.createBoard(boardName).then((res) => {
        boardURL = res.body.url;
        boardId = res.body.id;

        cy.loginToTrello();

         dataUtil.getListsInBoard(boardId);
    }).then((res) => {
        listId = res.body[0].id;

            return dataUtil.createTemplate(listId, templateName);
        }).then((res) => {
            templateURL = res.body.url; 
           
        });
    });



Given("The user navigated to the template",()=>{
    moveTemplateAction.openTemplate(templateURL)
})

When("The user clicks on move",()=>{
    moveTemplateAction.clicksOnMove()
})

When("The user choose the list he wants in the board",()=>{
    moveTemplateAction.chooseList(listName)
})

When("The user clicks on move button",()=>{
    moveTemplateAction.clicksOnMoveButton()  
})

Then("The template will be moved successfully",()=>{
  moveTemplateAssertion.checkTemplateInWhichListInside(listName)  
  moveTemplateAssertion.checkTemplateInWhichListOut(listName,templateName)
})

after(()=>{
    dataUtil.deleteBoard(boardId).then((response) => {
        if (response.status === 200) {
            cy.log(`Board with ID ${boardId} was deleted successfully.`);
        } else {
            cy.log(`Failed to delete board with ID ${boardId}. Status: ${response.status}`);
        }
    });
})
