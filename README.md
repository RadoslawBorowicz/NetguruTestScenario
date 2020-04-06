# NetguruTestScenario How to run script
1. Download and install node.js from https://nodejs.org/en/
2. Open cmd prompt as administrator
3. Add path to location of node.js using commannd: setx /m path "%path%;C:/path/to/node.js'" (e.g setx /m path "%path%;C:\Program Files\nodejs")
4. Reopen cmd prompt
5. Install selenium libraries using command: npm install selenium-webdriver
6. Check version of chrome browser by going to chrome://settings/help
7. Download adequete version of webdriver from https://sites.google.com/a/chromium.org/chromedriver/downloads
8. Open cmd prompt as administrator
9. Add path to location of webdriver using commannd: setx /m path "%path%;C:/path/to/chromedrive/'" (e.g setx /m path "%path%;C:\Program Files\Chromedrive")
10. Reopen cmd prompt
11. Run testing script using command: node C:/path/to/script/ (e.g node C:\Users\Radek\OneDrive\Pulpit\Netguru_Test_JavaScript.js)
