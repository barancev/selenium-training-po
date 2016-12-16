var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
  var driver;

  test.before(function() {
    driver = new webdriver.Builder()
        .forBrowser("chrome")
        .build();
  });

  test.it('should append query to title', function() {
    driver.get('http://www.google.com');

     driver.wait(until.elementLocated(By.name('q')), 10000/*ms*/).then(function() {
       driver.findElement(By.name('q')).sendKeys('webdriver').then(function() {
         driver.findElement(By.name('btnG')).click().then(function(){
           driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000);
         });
       });
     });
  });

  test.after(function() {
    driver.quit();
  });
});
