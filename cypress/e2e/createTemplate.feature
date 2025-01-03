@smokeTests
Feature: Create New Template
Scenario: Validate that the user can create new template
Given The user navigates to board 
Then The user clicks on Create from template icon 
And The user clicks on Create a new template button 
And The user types template name into template title field
And The user clicks on Add button
Then The template will be added successfully

