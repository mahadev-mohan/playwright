@test
Feature: Checkout verifications

 Background: User loggin to Swags Labs application
        Given the user launches the browser with Swag Labs url
        Then the user should see login page
        When the user enters username and password
        Then the user should see products page
  
    Scenario: Verify user is able to finish checkout products 
        When the user clicks add to cart button in products:
            | Sauce Labs Backpack   |
            | Sauce Labs Onesie     |
        When the user clicks on cart icon
        Then the user should see selected products in the cart   
        When the user clicks checkout button
        Then the user should navigate to the checkout infromation page
        When the user enters checkout informations
        And the user clicks continue button
        Then the user should navigate to the checkout overview page
        And the user should see the total amount of products selected
        When the user clicks finish button
        Then a thank you message should be visble