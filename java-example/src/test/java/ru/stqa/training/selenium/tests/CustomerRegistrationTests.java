package ru.stqa.training.selenium.tests;

import com.tngtech.java.junit.dataprovider.DataProviderRunner;
import com.tngtech.java.junit.dataprovider.UseDataProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import ru.stqa.training.selenium.model.Customer;

import java.util.Set;

import static org.junit.Assert.assertTrue;

@RunWith(DataProviderRunner.class)
public class CustomerRegistrationTests extends TestBase {

    @Test
    @UseDataProvider(value = "validCustomers", location = DataProviders.class)
    public void canRegisterCustomer(Customer customer) {
        Set<String> oldIds = app.getCustomerIds();

        app.registerNewCustomer(customer);

        Set<String> newIds = app.getCustomerIds();

        assertTrue(newIds.containsAll(oldIds));
        assertTrue(newIds.size() == oldIds.size() + 1);
    }

}
