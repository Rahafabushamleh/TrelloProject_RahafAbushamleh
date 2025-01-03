/// <reference types="cypress" />
import {When ,Then,Given} from "cypress-cucumber-preprocessor/steps"
import boardActions from "../../pageObjects/createBoard/actions.cy"
import boardAssertions from "../../pageObjects/createBoard/assertions.cy";

const boardAction =new boardActions()
const boardName="My second Board"
const boardAssertion=new boardAssertions();
Given("The user login to Trello website",()=>{
cy.loginToTrello()
})

When("The user clicks on Create board in navbar",()=>{
    boardAction.clickOnNavbarCreateButton()
})

When("The user clicks on Create board option",()=>{
    boardAction.clickOnCreateBoardOption()
})

When("The user types board name into board title input field",()=>{
    boardAction.typeInBoardTitleInput(boardName)
})

When("The user clicks on Create button",()=>{
    boardAction.clickOnCreateButton()

})

Then("The board will be created successfully",()=>{
    boardAssertion.checkBoardNameIsContain(boardName) 
})
