Feature: Login
    As a Reddit user 
    I want to be able to log into the application 

Scenario: Login 
    Given Mark is on the home page
    When Mark selects the Log In button 
    And enters his user credentials 
    Then the home page should be displayed 
    And the his username should be displayed in the top right 