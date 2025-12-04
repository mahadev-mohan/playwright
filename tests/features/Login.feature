@test
Feature: Login Feature

    Background: User launches the browser
        Given the user launches the browser with Swag Labs url
        Then the user should see login page

    Scenario: Verify user is able to login to the application
        When the user enters username and password
        Then the user should see products page

    Scenario: Verify user not able to login with invalid credentials

        When the user enters invalid username and password
        Then the user should see error message
        And the user should not navigate to products page

    Scenario: Verify user is able to logout from the application
        When the user enters username and password
        Then the user should see products page
        When the user click logout button from the hamburger menu
        Then the user should navigate to the login page




