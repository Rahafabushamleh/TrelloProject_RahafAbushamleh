/// <reference types="cypress" /> 
import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import templateActions from "../../pageObjects/createTemplate/actions.cy";
import templateAssertions from "../../pageObjects/createTemplate/assertions.cy";
import dataUtils from "../../support/dataUtils.cy";

const templateAction= new templateActions()
const templateAssertion=new templateAssertions()
const dataUtil=new dataUtils()
const boardName="My board";
const templateName="My template"
let boardURL;
let boardId;


before(()=>{
    dataUtil.createBoard(boardName).then((res)=>{
        boardURL=res.body.url
        boardId=res.body.id
    })
   
    cy.loginToTrello()
})


Given("The user navigates to board",()=>{
    templateAction.navigateToBoard(boardURL)
})

When("The user clicks on Create from template icon",()=>{
    templateAction.clicksOnCreateFromTemplate()
})

When("The user clicks on Create a new template button",()=>{
    templateAction.clicksOnCreateNewTemplateButton()
})

When("The user types template name into template title field",()=>{
    templateAction.typeTemplateNameIntoTemplateInputField(templateName)
})

When("The user clicks on Add button",()=>{
    templateAction.clicksOnAddButton()
})

Then("The template will be added successfully",()=>{
    templateAssertion.checkTemplateBackName(templateName)
    templateAssertion.checkTemplateIfExistInCardsList(templateName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})