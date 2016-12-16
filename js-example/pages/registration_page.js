var webdriver = require('selenium-webdriver');

var By = webdriver.By,
    until = webdriver.until;

class RegistrationPage {

    constructor(driver) {
        this.driver = driver;
    }

    open() {
        this.driver.get("http://localhost/litecart/en/create_account");
    }

    firstnameInput() {
        return this.driver.findElement(By.name("firstname"));
    }

    lastnameInput() {
        return this.driver.findElement(By.name("lastname"));
    }

    address1Input() {
        return this.driver.findElement(By.name("address1"));
    }

    postcodeInput() {
        return this.driver.findElement(By.name("postcode"));
    }

    cityInput() {
        return this.driver.findElement(By.name("city"));
    }

    emailInput() {
        return this.driver.findElement(By.name("email"));
    }

    phoneInput() {
        return this.driver.findElement(By.name("phone"));
    }

    passwordInput() {
        return this.driver.findElement(By.name("password"));
    }

    confirmedPasswordInput() {
        return this.driver.findElement(By.name("confirmed_password"));
    }

    createAccountButton() {
        return this.driver.findElement(By.name("create_account"));
    }

    selectCountry(country) {
        this.driver.findElement(By.css("[id ^= select2-country_code]")).click();
        this.driver.findElement(By.css(".select2-results__option[id $= "+country+"]")).click();
    }

    selectZone(zone) {
        this.driver.wait(until.elementLocated(By.css("select[name=zone_code] option[value="+zone+"]")));
        this.driver.findElement(By.css("select[name=zone_code]")).click();
        this.driver.findElement(By.css("select[name=zone_code] option[value="+zone+"]")).click();
    }
}

exports.RegistrationPage = RegistrationPage;