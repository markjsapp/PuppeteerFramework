Feature: Search
    In order to find various items
    As a user 
    I want to be able to search the application 

Scenario: Search for an item
    Given Mark is on the Amazon homepage
    When Mark searches for 'Nintendo Switch'
    Then 'Nintendo Switch' should be displayed in the results 