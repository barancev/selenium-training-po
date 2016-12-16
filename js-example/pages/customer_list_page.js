var webdriver = require('selenium-webdriver');

var By = webdriver.By,
    until = webdriver.until;

class CustomerListPage {

    constructor(driver) {
        this.driver = driver;
    }

    open() {
        this.driver.get("http://localhost/litecart/admin/?app=customers&doc=customers");
        return this;
    }

    customerRows() {
        return this.driver.findElements(By.css("table.dataTable tr.row"));
    }

    getCustomerIds() {
        var ids = [];
        return this.customerRows().then(function(rows) {
            for (var i=0; i < rows.length; i++) {
                rows[i].findElements(By.css("td")).then(function(cells) {
                    cells[2].getText().then(function(txt) {
                        ids.push(txt);
                    });
                });
            }
        });
        return ids;
    }

}

exports.CustomerListPage = CustomerListPage;

