var webdriver = require('selenium-webdriver'),
    registration_page = require('../pages/registration_page'),
    admin_panel_login_page = require('../pages/admin_panel_login_page'),
    customer_list_page = require('../pages/customer_list_page');

class Application {

    constructor() {
        this.driver = new webdriver.Builder()
            .forBrowser("chrome")
            .build();
        this.registrationPage = new registration_page.RegistrationPage(this.driver);
        this.adminPanelLoginPage = new admin_panel_login_page.AdminPanelLoginPage(this.driver);
        this.customerListPage = new customer_list_page.CustomerListPage(this.driver);
    }

    quit() {
        this.driver.quit();
    }

    registerNewCustomer(customer) {
        this.registrationPage.open();
        this.registrationPage.firstnameInput().sendKeys(customer.firstname);
        this.registrationPage.lastnameInput().sendKeys(customer.lastname);
        this.registrationPage.address1Input().sendKeys(customer.address);
        this.registrationPage.postcodeInput().sendKeys(customer.postcode);
        this.registrationPage.cityInput().sendKeys(customer.city);
        this.registrationPage.selectCountry(customer.country);
        this.registrationPage.selectZone(customer.zone);
        this.registrationPage.emailInput().sendKeys(customer.email);
        this.registrationPage.phoneInput().sendKeys(customer.phone);
        this.registrationPage.passwordInput().sendKeys(customer.password);
        this.registrationPage.confirmedPasswordInput().sendKeys(customer.password);
        this.registrationPage.createAccountButton().click();
    }

    getCustomerIds() {
        var ap = this.adminPanelLoginPage;
        ap.open().onThisPageDo(function() {
            ap.enterUsername("admin").enterPassword("admin").submitLogin();
        });
        return this.customerListPage.open().getCustomerIds();
    }
}

exports.Application = Application;
