class Customer
  attr_reader :address
  attr_reader :postcode
  attr_reader :city
  attr_reader :country
  attr_reader :zone
  attr_reader :email
  attr_reader :phone
  attr_reader :password
  attr_reader :firstname
  attr_reader :lastname

  def initialize(firstname: nil, lastname: nil, address: nil, postcode: nil, city: nil, country: nil, zone: nil, email: nil, phone: nil, password: nil)
    @address = address
    @postcode = postcode
    @city = city
    @country = country
    @zone = zone
    @email = email
    @phone = phone
    @password = password
    @firstname = firstname
    @lastname = lastname
  end
end

