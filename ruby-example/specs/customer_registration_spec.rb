require 'rspec/expectations'
require './shared_setup'
require '../model/customer'

[
    Customer.new(firstname: 'Adam', lastname: 'Smith', phone: '+0123456789',
                 address: 'Hidden Place', postcode: '12345', city: 'New City',
                 country: 'US', zone: 'KS',
                 email: 'adam%s@smith.me' % (Time.now.to_f * 1000.0).to_i,
                 password: 'qwerty'),
    # ...
].each do |customer|
  describe 'Litecart' do
    it 'should create customer' do
      old_ids = @app.get_customer_ids
      @app.register_new_customer customer

      new_ids = @app.get_customer_ids

      old_ids.each { |id| expect(new_ids).to include(id) }
      expect(new_ids.size).to eq(old_ids.size + 1)
    end
  end
end

