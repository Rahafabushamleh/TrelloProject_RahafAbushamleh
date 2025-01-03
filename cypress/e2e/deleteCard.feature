@smokeTests
Feature: Delete existing card in Trello website

Scenario: Validate that the user can delete an existing card
When The user navigates to the card
And The user clicks on the Archive button
And The user clicks on delete button
And The user confirms the deletion
Then The card should be deleted successfully
