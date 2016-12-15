require 'selenium-webdriver'
require '../pages/admin_panel_login_page'
require '../pages/customer_list_page'
require '../pages/registration_page'

class Application
  def initialize
    @driver = Selenium::WebDriver.for :chrome
    @registration_page = RegistrationPage.new @driver
    @admin_panel_login_page = AdminPanelLoginPage.new @driver
    @customer_list_page = CustomerListPage.new @driver
  end

  def quit
    @driver.quit
  end

  def register_new_customer(customer)
    @registration_page.open
    @registration_page.firstname_input.send_keys customer.firstname
    @registration_page.lastname_input.send_keys customer.lastname
    @registration_page.address1_input.send_keys customer.address
    @registration_page.postcode_input.send_keys customer.postcode
    @registration_page.city_input.send_keys customer.city
    @registration_page.select_country customer.country
    @registration_page.select_zone customer.zone
    @registration_page.email_input.send_keys customer.email
    @registration_page.phone_input.send_keys customer.phone
    @registration_page.password_input.send_keys customer.password
    @registration_page.confirmed_password_input.send_keys customer.password
    @registration_page.create_account_button.click
  end

  def get_customer_ids
      if @admin_panel_login_page.open.on_this_page?
          @admin_panel_login_page.enter_username("admin").enter_password("admin").submit_login
      end
      return @customer_list_page.open.get_customer_ids
  end
end


