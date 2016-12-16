var target = require('../app/application'),
    test = require('selenium-webdriver/testing');

test.describe('Litecart', function() {
    var app;

    test.before(function() {
        app = new target.Application();
    });

    [{firstname: 'Adam', lastname: 'Smith', phone: '+0123456789',
      address: 'Hidden Place', postcode: '12345', city: 'New City',
      country: 'US', zone: 'KS',
      email: 'adam'+new Date().getTime()+'@smith.me',
      password: 'qwerty'}
    ].forEach(function(customer) {
        test.it('can register a customer', function() {
            var oldIds = app.getCustomerIds();

            app.registerNewCustomer(customer);

            var newIds = app.getCustomerIds();

            // сюда надо ещё добавить проверки
        });
    });

    test.after(function() {
        app.quit();
    });
});
