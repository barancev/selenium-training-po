package ru.stqa.training.selenium;

import com.tngtech.java.junit.dataprovider.DataProvider;
import com.tngtech.java.junit.dataprovider.DataProviderRunner;
import com.tngtech.java.junit.dataprovider.UseDataProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

@RunWith(DataProviderRunner.class)
public class CustomerRegistrationTests extends TestBase {

    @Test
    @UseDataProvider(value = "validCustomers", location = DataProviders.class)
    public void canRegisterCustomer(Customer customer) {
        driver.get("http://localhost/litecart/en/create_account");
        driver.findElement(By.name("firstname")).sendKeys(customer.getFirstname());
        driver.findElement(By.name("lastname")).sendKeys(customer.getLastname());
        driver.findElement(By.name("address1")).sendKeys(customer.getAddress());
        driver.findElement(By.name("postcode")).sendKeys(customer.getPostcode());
        driver.findElement(By.name("city")).sendKeys(customer.getCity());

        driver.findElement(By.cssSelector("[id ^= select2-country_code]")).click();
        driver.findElement(By.cssSelector(
                String.format(".select2-results__option[id $= %s", customer.getCountry()))).click();
        wait.until((WebDriver d) -> d.findElement(
                By.cssSelector(String.format("select[name=zone_code] option[value=%s]", customer.getZone()))));
        new Select(driver.findElement(By.name("zone_code"))).selectByValue(customer.getZone());

        driver.findElement(By.name("email")).sendKeys(customer.getEmail());
        driver.findElement(By.name("phone")).sendKeys(customer.getPhone());
        driver.findElement(By.name("password")).sendKeys(customer.getPassword());
        driver.findElement(By.name("confirmed_password")).sendKeys(customer.getPassword());
        driver.findElement(By.name("create_account")).click();
    }

}
