require 'rspec/expectations'
require 'selenium-webdriver'
require '../app/application'


@app = nil

RSpec.configure do |config|
  config.before(:example) do
    if @app.nil?
      @app = Application.new
    end
  end

  config.after(:suite) do
    @app.quit
  end
end

