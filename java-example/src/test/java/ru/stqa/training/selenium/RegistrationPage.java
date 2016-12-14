package ru.stqa.training.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RegistrationPage extends Page {

    public RegistrationPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.get("http://localhost/litecart/en/create_account");
    }

    public WebElement firstnameInput() {
        return driver.findElement(By.name("firstname"));
    }

    public WebElement lastnameInput() {
        return driver.findElement(By.name("lastname"));
    }
    public WebElement address1Input() {
        return driver.findElement(By.name("address1"));
    }
    public WebElement postcodeInput() {
        return driver.findElement(By.name("postcode"));
    }
    public WebElement cityInput() {
        return driver.findElement(By.name("city"));
    }
    public WebElement emailInput() {
        return driver.findElement(By.name("email"));
    }
    public WebElement phoneInput() {
        return driver.findElement(By.name("phone"));
    }
    public WebElement passwordInput() {
        return driver.findElement(By.name("password"));
    }
    public WebElement confirmedPasswordInput() {
        return driver.findElement(By.name("confirmed_password"));
    }

    public WebElement createAccountButton() {
        return driver.findElement(By.name("create_account"));
    }
}
