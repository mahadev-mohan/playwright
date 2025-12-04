@test
Feature: Cart verifications

    Background: User loggin to Swags Labs application
        Given the user launches the browser with Swag Labs url
        Then the user should see login page
        When the user enters username and password
        Then the user should see products page
    
    Scenario: Verify user is able to add a product in to the cart
        When the user clicks add to cart button in products:
            | Sauce Labs Backpack   |
        Then the cart icon should indicate the count of products
        When the user clicks on cart icon
        Then the user should see selected products in the cart
 
     Scenario: Verify user is able to add multiple products to the cart
        When the user clicks add to cart button in products:
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |
            | Sauce Labs Onesie     |
        Then the cart icon should indicate the count of products
        When the user clicks on cart icon
        Then the user should see selected products in the cart   