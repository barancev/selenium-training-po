require 'selenium-webdriver'

class AdminPanelLoginPage

  def initialize(driver)
    @driver = driver
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
  end

  def open
    @driver.get 'http://localhost/litecart/admin'
    self
  end

  def on_this_page?
    @driver.find_elements(:id => 'box-login').size > 0
  end

  def enter_username(username)
    @driver.find_element(:name => 'username').send_keys username
    self
  end

  def enter_password(password)
    @driver.find_element(:name => 'password').send_keys password
    self
  end

  def submit_login
    @driver.find_element(:name, 'login').click
    @wait.until { @driver.find_element :id => 'box-apps-menu' }
  end
end

