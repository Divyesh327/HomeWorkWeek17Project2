$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/RegistrationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "As a user I want to register into nopcommerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7173764400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user navigate to registration page successfully",
  "description": "",
  "id": "registration-test;verify-user-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Register page successfully \"\u003cverifyMessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationTestStepdefs.iAmOnNopcommerceHomepage()"
});
formatter.result({
  "duration": 176391500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1608869600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cverifyMessage\u003e",
      "offset": 49
    }
  ],
  "location": "RegistrationTestStepdefs.iShouldNavigateToRegisterPageSuccessfully(String)"
});
formatter.result({
  "duration": 1078040800,
  "status": "passed"
});
formatter.after({
  "duration": 873671700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify user registered successfully",
  "description": "",
  "id": "registration-test;verify-user-registered-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter confirm password \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Register successfully \"\u003cregistermessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "registration-test;verify-user-registered-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmpassword"
      ],
      "line": 25,
      "id": "registration-test;verify-user-registered-successfully;;1"
    },
    {
      "cells": [
        "abcxys",
        "soni",
        "divsoni327@gmail.com",
        "Div@123",
        "Div@123"
      ],
      "line": 26,
      "id": "registration-test;verify-user-registered-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5360841500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user registered successfully",
  "description": "",
  "id": "registration-test;verify-user-registered-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter first name \"abcxys\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"soni\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter email \"divsoni327@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"Div@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter confirm password \"Div@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Register successfully \"\u003cregistermessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 367100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1550623700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestStepdefs.iSelectMaleRadioButton()"
});
formatter.result({
  "duration": 104857000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcxys",
      "offset": 20
    }
  ],
  "location": "RegistrationTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 139729300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soni",
      "offset": 19
    }
  ],
  "location": "RegistrationTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 162015200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divsoni327@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1190416000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Div@123",
      "offset": 18
    }
  ],
  "location": "LoginTestStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 154001800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Div@123",
      "offset": 26
    }
  ],
  "location": "RegistrationTestStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 142754800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationTestStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 103387000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cregistermessage\u003e",
      "offset": 32
    }
  ],
  "location": "RegistrationTestStepdefs.iShouldRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 20160943500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3LLOLQ1\u0027, ip: \u0027192.168.1.138\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\DIVYA\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59911}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c0c5756ec8d763e285a098b9ecbe63e\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:56)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.getTextRegistrationComplete(RegisterPage.java:117)\r\n\tat com.nopcommerce.demo.stepdefs.RegistrationTestStepdefs.iShouldRegisterSuccessfully(RegistrationTestStepdefs.java:68)\r\n\tat ✽.Then I should Register successfully \"\u003cregistermessage\u003e\"(src/test/java/resources/featurefile/RegistrationTest.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1010862300,
  "status": "passed"
});
});