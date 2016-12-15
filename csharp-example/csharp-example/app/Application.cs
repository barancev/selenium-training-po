using System;
using System.Collections.Generic;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace csharp_example
{
    public class Application
    {
        private IWebDriver driver;

        private RegistrationPage registrationPage;
        private AdminPanelLoginPage adminPanelLoginPage;
        private CustomerListPage customerListPage;

        public Application()
        {
            driver = new ChromeDriver();
            registrationPage = new RegistrationPage(driver);
            adminPanelLoginPage = new AdminPanelLoginPage(driver);
            customerListPage = new CustomerListPage(driver);
        }

        public void Quit()
        {
            driver.Quit();
        }

        internal void RegisterNewCustomer(Customer customer)
        {
            registrationPage.Open();
            registrationPage.FirstnameInput.SendKeys(customer.Firstname);
            registrationPage.LastnameInput.SendKeys(customer.Lastname);
            registrationPage.Address1Input.SendKeys(customer.Address);
            registrationPage.PostcodeInput.SendKeys(customer.Postcode);
            registrationPage.CityInput.SendKeys(customer.City);
            registrationPage.SelectCountry(customer.Country);
            registrationPage.SelectZone(customer.Zone);
            registrationPage.EmailInput.SendKeys(customer.Email);
            registrationPage.PhoneInput.SendKeys(customer.Phone);
            registrationPage.PasswordInput.SendKeys(customer.Password);
            registrationPage.ConfirmedPasswordInput.SendKeys(customer.Password);
            registrationPage.CreateAccountButton.Click();
        }

        internal ISet<string> GetCustomerIds()
        {
            if (adminPanelLoginPage.Open().IsOnThisPage())
            {
                adminPanelLoginPage.EnterUsername("admin").EnterPassword("admin").SubmitLogin();
            }

            return customerListPage.Open().GetCustomerIds();
        }

    }
}