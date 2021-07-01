Feature: Registration Test
  As a user I want to register into nopcommerce website

  @Sanity1
  Scenario: Verify user navigate to registration page successfully
    Given   I am on nopcommerce homepage
    When    I click on Register link
    Then    I should navigate to Register page successfully "<verifyMessage>"



  @Regression2
  Scenario Outline: Verify user registered successfully
    Given   I am on homepage
    When    I click on Register link
    And     I select male radio button
    And     I enter first name "<firstname>"
    And     I enter last name "<lastname>"
    And     I enter email "<email>"
    And     I enter password "<password>"
    And     I enter confirm password "<confirmpassword>"
    And     I click on Register button
    Then    I should Register successfully "<registermessage>"
    Examples:
      | firstname | lastname | email                | password | confirmpassword |
      | abcxys    | soni     | divsoni327@gmail.com | Div@123  | Div@123         |


