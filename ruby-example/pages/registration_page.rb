require 'selenium-webdriver'

class RegistrationPage

  def initialize(driver)
    @driver = driver
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
  end

  def open
    @driver.get 'http://localhost/litecart/en/create_account'
    self
  end

  def firstname_input
    @driver.find_element :name => 'firstname'
  end

  def lastname_input
    @driver.find_element :name => 'lastname'
  end

  def address1_input
    @driver.find_element :name => 'address1'
  end

  def postcode_input
    @driver.find_element :name => 'postcode'
  end

  def city_input
    @driver.find_element :name => 'city'
  end

  def email_input
    @driver.find_element :name => 'email'
  end

  def phone_input
    @driver.find_element :name => 'phone'
  end

  def password_input
    @driver.find_element :name => 'password'
  end

  def confirmed_password_input
    @driver.find_element :name => 'confirmed_password'
  end

  def create_account_button
    @driver.find_element :name => 'create_account'
  end

  def select_country(country)
    @driver.find_element(:css => '[id ^= select2-country_code]').click
    @driver.find_element(:css => ".select2-results__option[id $= #{country}]").click
  end

  def select_zone(zone)
    @wait.until { @driver.find_element :css => "select[name=zone_code] option[value=#{zone}]" }
    Selenium::WebDriver::Support::Select.new(@driver.find_element :css => 'select[name=zone_code]').select_by :value, zone
  end

end
