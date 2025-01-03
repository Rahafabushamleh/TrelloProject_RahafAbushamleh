/// <reference types="cypress" />

import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import hideTemplateAssertions from "../../pageObjects/hideTemplate/assertions.cy";
import hideTemplateActions from "../../pageObjects/hideTemplate/actions.cy";
import dataUtils from "../../support/dataUtils.cy";

const hideTemplateAssertion=new hideTemplateAssertions()
const hideTemplateAction=new hideTemplateActions()

const boardName ="My new board"
const templateName="My new template"
const dataUtil=new dataUtils
let boardId;
let listId;
let templateURL

before(() => {
    dataUtil.createBoard(boardName).then((res) => {
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

Given("The user navigates to the template",()=>{
    cy.wait(2000)
    hideTemplateAction.openTemplate(templateURL)
})

When("The user clicks on Hide from list button",()=>{
    hideTemplateAction.clicksOnHideButton()
})

Then("The template will be hidden",()=>{
    hideTemplateAssertion.checkButtonIsContain()
    hideTemplateAssertion.checkTemplateIfExistInTheList()
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})