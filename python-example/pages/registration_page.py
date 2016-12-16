from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.select import Select


class RegistrationPage:

    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def open(self):
        self.driver.get("http://localhost/litecart/en/create_account")
        return self

    @property
    def firstname_input(self):
        return self.driver.find_element_by_name("firstname")

    @property
    def lastname_input(self):
        return self.driver.find_element_by_name("lastname")

    @property
    def address1_input(self):
        return self.driver.find_element_by_name("address1")

    @property
    def postcode_input(self):
        return self.driver.find_element_by_name("postcode")

    @property
    def city_input(self):
        return self.driver.find_element_by_name("city")

    @property
    def email_input(self):
        return self.driver.find_element_by_name("email")

    @property
    def phone_input(self):
        return self.driver.find_element_by_name("phone")

    @property
    def password_input(self):
        return self.driver.find_element_by_name("password")

    @property
    def confirmed_password_input(self):
        return self.driver.find_element_by_name("confirmed_password")

    @property
    def create_account_button(self):
        return self.driver.find_element_by_name("create_account")

    def select_country(self, country):
        self.driver.find_element_by_css_selector("[id ^= select2-country_code]").click()
        self.driver.find_element_by_css_selector(".select2-results__option[id $= %s]" % country).click()

    def select_zone(self, zone):
        self.wait.until(lambda d: d.find_element_by_css_selector("select[name=zone_code] option[value=%s]" % zone))
        Select(self.driver.find_element_by_css_selector("select[name=zone_code]")).select_by_value(zone)
