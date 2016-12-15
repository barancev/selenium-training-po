from selenium.webdriver.support.wait import WebDriverWait


class CustomerListPage:

    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def open(self):
        self.driver.get("http://localhost/litecart/admin/?app=customers&doc=customers")
        return self

    @property
    def customer_rows(self):
        return self.driver.find_elements_by_css_selector("table.dataTable tr.row")

    def get_customer_ids(self):
        return set([e.text for e in self.customer_rows])
