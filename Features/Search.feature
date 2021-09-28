Feature: Search
    In order to find various communities, users, and posts 
    As a user 
    I want to be able to search the application 

Background:
    Given Mark is on the Reddit homepage
    Given Mark is logged in 

Scenario: Search for a subreddit 
    When Mark searches for 'movies'
    Then /r/movies should be displayed in the results as a subreddit 
