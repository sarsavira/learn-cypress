Feature: Login to Application

   As a invalid user
   I cannot log into application
   As a valid user
   I want to log in into application

   Scenario: Invalid Login
    Given I open login page
    And I want to wait 2000 milliseconds
    And I want to see "Zero - Log in" in the title
    And I see "/login" in the url
    When I fill username with "invalid username"
    And I fill password with "invalid password"
    And I click on submit login
    Then I should see error message
   
   
   Scenario: Valid Login
    Given I open login page
    # When I submit login
    When I fill username with "username"
    And I fill password with "password"
    And I click on submit login
    Then I should see homepage