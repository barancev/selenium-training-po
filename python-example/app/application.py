from selenium import webdriver
from pages.admin_panel_login_page import AdminPanelLoginPage
from pages.customer_list_page import CustomerListPage
from pages.registration_page import RegistrationPage

class Application:

    def __init__(self):
        self.driver = webdriver.Chrome()
        self.registration_page = RegistrationPage(self.driver)
        self.admin_panel_login_page = AdminPanelLoginPage(self.driver)
        self.customer_list_page = CustomerListPage(self.driver)

    def quit(self):
        self.driver.quit()

    def register_new_customer(self, customer):
        self.registration_page.open()
        self.registration_page.firstname_input.send_keys(customer.firstname)
        self.registration_page.lastname_input.send_keys(customer.lastname)
        self.registration_page.address1_input.send_keys(customer.address)
        self.registration_page.postcode_input.send_keys(customer.postcode)
        self.registration_page.city_input.send_keys(customer.city)
        self.registration_page.select_country(customer.country)
        self.registration_page.select_zone(customer.zone)
        self.registration_page.email_input.send_keys(customer.email)
        self.registration_page.phone_input.send_keys(customer.phone)
        self.registration_page.password_input.send_keys(customer.password)
        self.registration_page.confirmed_password_input.send_keys(customer.password)
        self.registration_page.create_account_button.click()

    def get_customer_ids(self):
        if self.admin_panel_login_page.open().is_on_this_page():
            self.admin_panel_login_page.enter_username("admin").enter_password("admin").submit_login()
        return self.customer_list_page.open().get_customer_ids()
