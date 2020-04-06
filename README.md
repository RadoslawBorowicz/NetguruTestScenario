# NetguruTestScenario How to run script
Download and install node.js from https://nodejs.org/en/
Open cmd prompt as administrator
Add path to location of node.js using commannd: setx /m path "%path%;C:/path/to/node.js'" (e.g setx /m path "%path%;C:\Program Files\nodejs")
Reopen cmd prompt
Install selenium libraries using command: npm install selenium-webdriver
Check version of chrome browser by going to chrome://settings/help
Download adequete version of webdriver from https://sites.google.com/a/chromium.org/chromedriver/downloads
Open cmd prompt as administrator
Add path to location of webdriver using commannd: setx /m path "%path%;C:/path/to/chromedrive/'" (e.g setx /m path "%path%;C:\Program Files\Chromedrive")
Reopen cmd prompt
Run testing script using command: node C:/path/to/script/ (e.g C:\Users\Radek\OneDrive\Pulpit\Netguru_Test_JavaScript.js)
