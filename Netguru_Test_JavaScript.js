const selenium = require("selenium-webdriver");
const capabilities = {
    'browserName' : 'chrome',
    'chromeOptions': {
        'w3c': false
    }
};
const browser = new selenium.Builder().withCapabilities(capabilities).forBrowser("chrome");
const driver = browser.build();
const {Builder, By, until, selectByValue} = require('selenium-webdriver');

(async function testScenarios(){

//Validate that user younger than 13 cannot create account without agreement

    await driver.get('https://allegro.pl/');
    await driver.sleep(1000);
    await driver.findElement(By.className('_13q9y _8hkto _11eg6 _7qjq4 _ey68j')).click();
    await driver.findElement(By.className('_1fwkl _1h7wt _9hx3e _1vx3o _lsy4e _jl1m8 _1ue2y _1k1q2 _16qww _6dhbr _fee54_3DeiY')).click();
    await driver.findElement(By.className('_8hkto _13q9y _rs9qm _1xzdi _ai5yc _5d6n2 _1t7v4 _fee54_3zcXb')).click();
    await driver.sleep(1000);

    let emailInputBox = driver.findElement(By.id('email'));
    let passwordInputBox = driver.findElement(By.id('password'));
    let dayInputBox = driver.findElement(By.id('day'));
    let monthInputMenu = driver.findElement(By.name('month'));
    let yearInputBox = driver.findElement(By.id('year'));
    let termAndCondBox = driver.findElement(By.xpath("//label[@for='agreementTerms']"));
    let loginForm = driver.findElement(By.name('registrationForm'));

    await emailInputBox.sendKeys('NetguruTesting@gmail.com');
    await passwordInputBox.sendKeys('Testingtesting123');
    await dayInputBox.sendKeys(Math.floor(Math.random() * 28) + 1);
    await monthInputMenu.findElement(By.css(`option[value='${Math.floor(Math.random() * 12)}']`)).click();
    await yearInputBox.sendKeys(Math.floor(Math.random() * 3) + 2003);
    await driver.findElement(By.css("body")).click();
    await termAndCondBox.click();
    await loginForm.submit();
    await driver.sleep(2000);
    
    let youngAgreementTerms = await driver.findElement(By.css("body > div.main-wrapper > div:nth-child(4) > div > div > div > div > div > section > div > div > div > section:nth-child(3) > div:nth-child(3) > form > div > div > ng-include:nth-child(6) > div > div")).isDisplayed();
    if (youngAgreementTerms == true) {console.log("Lack of agreement prompt displayed: Pass");} else {console.log("Lack of agreement prompt displayed: Fail");}

//Validate that user cannot login into account without providing any password

    await driver.navigate().back();
    await driver.sleep(1000);
    await driver.findElement(By.className('_1fwkl _1h7wt _9hx3e _1vx3o _lsy4e _jl1m8 _1ue2y _1k1q2 _16qww _6dhbr _fee54_3DeiY')).click();
    await driver.findElement(By.className('_8tsq7 _13q9y _rs9qm _1xzdi _ai5yc _5d6n2 _1t7v4 _fee54_3zcXb')).click();
    
    let usernameInputBox = driver.findElement(By.id('username'));
    let loginButton = driver.findElement(By.id('login-button'));

    await usernameInputBox.sendKeys('NetguruLogin')
    await loginButton.click();
    await driver.sleep(1000);
    
    let passwordErrorMessage = await driver.findElement(By.id('wrong-password-message')).isDisplayed();
    if (passwordErrorMessage == true) {console.log("Lack of password prompt displayed: Pass");} else {console.log("Lack of password prompt displayed: Fail");}

}());

