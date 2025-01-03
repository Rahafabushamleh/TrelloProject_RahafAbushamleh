/// <reference types="cypress" /> 
import { Given,Then,When } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import cardActions from "../../pageObjects/createCard/actions.cy";
import cardAssertions from "../../pageObjects/createCard/assertions.cy";

const dataUtil=new dataUtils();
const boardName="My board";
const cardAction=new cardActions();
const cardName="My first card"
const cardAssertion = new cardAssertions()

let boardURL;
let boardId;

before(()=>{
    dataUtil.createBoard(boardName).then((res)=>{
        boardURL=res.body.url
        boardId=res.body.id
    })
    cy.loginToTrello()
})

Given("The user navigate to the board",()=>{
cardAction.openBoard(boardURL)
})

When("Clicks on Add a card button",()=>{
   cardAction.clickOnAddACardButton() 
})

When("Types card name into card title field",()=>{
    cardAction.typeNameInCardTitleInputField(cardName)
})

When("Clicks on add card button",()=>{
    cardAction.clickOnAddCardButton()
})

Then("The card will be created successfully",()=>{
    cardAssertion.checkListIsContainCard(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})