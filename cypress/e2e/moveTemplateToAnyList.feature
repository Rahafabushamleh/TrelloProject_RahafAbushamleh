@smokeTest
Feature: Move template to any list in the same board
Scenario: Validate that the user can move template to any list in the board
Given The user navigated to the template
When The user clicks on move 
And The user choose the list he wants in the board  
And The user clicks on move button 
Then The template will be moved successfully 


