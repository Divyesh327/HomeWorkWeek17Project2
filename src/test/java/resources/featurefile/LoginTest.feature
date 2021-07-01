Feature: Login Test
  As a user I want to login into nopcommerce website

  @Sanity
  Scenario: Verify user is navigated to Login page successfully
    Given     I am on homepage
    When      I click on Login link
    Then      I should navigated to login page successfully "<verifyWelcomeMessage>"


  @Regression1
  Scenario: Verify user should login successfully with Valid credentials
    Given   I am on homepage
    When    I click on Login link
    And     I enter email "divsoni327@gmail.com"
    And     I enter password "Div@123"
    And     I click on login button
    Then    I should login successfully
