from selenium.webdriver.support.wait import WebDriverWait


class AdminPanelLoginPage:

    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def open(self):
        self.driver.get("http://localhost/litecart/admin")
        return self

    def is_on_this_page(self):
        return len(self.driver.find_elements_by_id("box-login")) > 0

    def enter_username(self, username):
        self.driver.find_element_by_name("username").send_keys(username)
        return self

    def enter_password(self, password):
        self.driver.find_element_by_name("password").send_keys(password)
        return self

    def submit_login(self):
        self.driver.find_element_by_name("login").click()
        self.wait.until(lambda d: d.find_element_by_id("box-apps-menu"))
