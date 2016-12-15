require 'selenium-webdriver'

class CustomerListPage

  def initialize(driver)
    @driver = driver
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
  end

  def open
    @driver.get 'http://localhost/litecart/admin/?app=customers&doc=customers'
    self
  end

  def customer_rows
    @driver.find_elements :css => 'table.dataTable tr.row'
  end

  def get_customer_ids
    customer_rows.map { |x| x.find_elements(:css => 'td')[2].text }
  end
end
