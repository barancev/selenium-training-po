using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Support.PageObjects;

namespace csharp_example
{
    internal class RegistrationPage : Page
    {
        public RegistrationPage(IWebDriver driver) : base(driver)
        {
            PageFactory.InitElements(driver, this);
        }

        internal void Open()
        {
            driver.Url = "http://localhost/litecart/en/create_account";
        }

        [FindsBy(How = How.Name, Using = "address1")]
        internal IWebElement Address1Input;
        [FindsBy(How = How.Name, Using = "city")]
        internal IWebElement CityInput;
        [FindsBy(How = How.Name, Using = "confirmed_password")]
        internal IWebElement ConfirmedPasswordInput;
        [FindsBy(How = How.Name, Using = "email")]
        internal IWebElement EmailInput;
        [FindsBy(How = How.Name, Using = "firstname")]
        internal IWebElement FirstnameInput;
        [FindsBy(How = How.Name, Using = "lastname")]
        internal IWebElement LastnameInput;
        [FindsBy(How = How.Name, Using = "password")]
        internal IWebElement PasswordInput;
        [FindsBy(How = How.Name, Using = "phone")]
        internal IWebElement PhoneInput;
        [FindsBy(How = How.Name, Using = "postcode")]
        internal IWebElement PostcodeInput;

        [FindsBy(How = How.Name, Using = "create_account")]
        internal IWebElement CreateAccountButton;

        internal void SelectCountry(string country)
        {
            driver.FindElement(By.CssSelector("[id ^= select2-country_code]")).Click();
            driver.FindElement(By.CssSelector(
                    String.Format(".select2-results__option[id $= {0}]", country))).Click();
        }

        internal void SelectZone(string zone)
        {
            wait.Until(d => d.FindElement(
                    By.CssSelector(String.Format("select[name=zone_code] option[value={0}]", zone))));
            new SelectElement(driver.FindElement(By.CssSelector("select[name=zone_code]"))).SelectByValue(zone);
        }

    }
}