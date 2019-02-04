# Automated Unit Testing Notes (A comparison)

The purpose of this geek club is to make a comparison of two automated UI testing frameworks; Selenium Server & NightwatchJS

## Setup

### Selenium
To get started with Selenium server and Nightwatch you firstly need to have the Java runtime installed for the server to run on. You will also need NodeJS installed with NPM to install some depenedancies.

How this works is Selenius server is a server run locally and when creating tests in your chosen language, in this instance we will be using NightwatchJS, that makes a call to that server as an API call. Then at that end Selenium takes the json passed through to create an instance of a Browser. However Selenium server will need to know where to find the spec to create these browser instances so they will need to be downloaded. Browser drivers can be found [here](http://nightwatchjs.org/gettingstarted). 

Geko driver for Firefox and Chromedriver can be downloaded through npm however I find these to be a bit flakey sometimes so potentially worth downloading them directly

### Nightwatch Config

Once you have installed Nightwatch from npm then you will need to create a few files in your directory. A nightwatch.json and a nightwatch.conf.js. This provides all the information that nightwatch needs regarding the loaction of the selenium server, whether or not to start one on running of the tests, what port it will be running on etc etc.

If you store all that information in the json and then import that into the JS file then you never have to change the js file if you wever need to change any of the details

To make assertions a library will need to be used, either Chai or Expect.js

Running frameworks like Mocha, Jasmine and Karma are useful for

### Cypress
Have node installed

`npm install cypress`

(that's pretty much it)

# Writing Tests

## Nightwatch

The way that the Nightwatch tests are written are functions within the module.exports of the test file. 

It is good practice to put all the tests in a folder to be run together and to keep tests for each kind of functionality

The general format of the tests takes `browser` as an argument, then you `browser.{something}`.

* `url` - The url you want to visit
* `click` - Pretty self explanitory
* `waitForElementVisible` - Waits until the element is visible on the document before coninuting.  

## Cypress
Once cypress is fully installed you have access to the `cy` keyword.
This is they keyword you will need to use for the remainder of the actions you wish to perform.

One of the main bonuses of Cypress is 

To open the test runner run `./node_modules/.bin/cypress open` this will find all the test files in your current directory and will have a ton of demo test files which are marked as `.spec.js` 