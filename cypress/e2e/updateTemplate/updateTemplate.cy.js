/// <reference types="cypress" />

import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import updateTemplateActions from "../../pageObjects/updateTemplate/actions.cy";
import updateTemplateAssertions from "../../pageObjects/updateTemplate/assertions.cy";

const boardName="Last board";
const templateName="My template"
let boardURL;
const dataUtil=new dataUtils()
const updateTemplateAction=new updateTemplateActions
const updateTemplateAssertion=new updateTemplateAssertions()
const newTemplateName='My new template'
let boardId;
let listId;
let templateURL;

before(() => {
    dataUtil.createBoard(boardName).then((res) => {
        boardURL = res.body.url;
        boardId = res.body.id;

        cy.loginToTrello();

         dataUtil.getListsInBoard(boardId);
    }).then((res) => {
        listId = res.body[0].id;

         dataUtil.createTemplate(listId,templateName);
    }).then((res) => {
        templateURL=res.body.url
    });
});

Given ("The user navigates to the template",()=>{
    updateTemplateAction.openTemplate(templateURL)

})


When ("The user change the name in the input field",()=>{
    updateTemplateAction.clicksOnNameInputField(newTemplateName)
})

Then ("The name will be changed successfully",()=>{
    updateTemplateAssertion.checkNameIfChangedOnThePopUp(newTemplateName)
    updateTemplateAssertion.checkNameIfChangedOnTheCardList(newTemplateName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})