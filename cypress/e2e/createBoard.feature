Feature: Create board in Trello website
Scenario: Create new board
Given The user login to Trello website
Then The user clicks on Create board in navbar
And The user clicks on Create board option
And The user types board name into board title input field
And The user clicks on Create button 
Then The board will be created successfully 