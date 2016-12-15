class Customer:
    def __init__(self, firstname=None, lastname=None, address=None, postcode=None, city=None, country=None, zone=None,
                 email=None, phone=None, password=None):
        self.address = address
        self.postcode = postcode
        self.city = city
        self.country = country
        self.zone = zone
        self.email = email
        self.phone = phone
        self.password = password
        self.firstname = firstname
        self.lastname = lastname
