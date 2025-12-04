@test
Feature: Checkout verifications

 Background: User loggin to Swags Labs application
        Given the user launches the browser with Swag Labs url
        Then the user should see login page
        When the user enters username and password
        Then the user should see products page
    
    Scenario: Verify user is able to sort the products
       When the user selects "Price (low to high)" from the product sort dropdown 
       Then the products should be sorted from lowest to highest price