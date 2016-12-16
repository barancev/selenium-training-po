var webdriver = require('selenium-webdriver');

var By = webdriver.By,
    until = webdriver.until;

class AdminPanelLoginPage {

    constructor(driver) {
        this.driver = driver;
    }

    open() {
        this.driver.get("http://localhost/litecart/admin");
        return this;
    }

    onThisPageDo(f) {
        this.driver.findElements(By.id("box-login")).then(function(arr) {
            if (arr.length > 0) {
                f.call();
            }
        });
    }

    enterUsername(username) {
        this.driver.findElement(By.name("username")).sendKeys(username);
        return this;
    }

    enterPassword(password) {
        this.driver.findElement(By.name("password")).sendKeys(password);
        return this;
    }

    submitLogin() {
        this.driver.findElement(By.name("login")).click();
        this.driver.wait(until.elementLocated(By.id("box-apps-menu")));
    }

}

exports.AdminPanelLoginPage = AdminPanelLoginPage;
