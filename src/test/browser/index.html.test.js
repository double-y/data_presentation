var sw = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var driver = new sw.Builder()
    .withCapabilities(sw.Capabilities.chrome())
    .build()

var chai = require('chai');
chai.should();
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));
var should = chai.should();

var path = require('path');

function waitForPageLoad (driver, timeout) {
    var oldHtmlElement;

    // check the arguments
    if (typeof timeout === 'undefined') {
        timeout = 5000;
    } else {
        if (typeof timeout !== 'number' || timeout <= 0) {
            throw new TypeError('The argument timeout must be a integer > 0');
        }
    }

    // get the html tag on the old page
    oldHtmlElement = driver.findElement(By.tagName('html'));

    // wait until the function returns true or the timeout expires
    return driver.wait(function () {
        // get the html tag on the (eventually already) new page
        var newHtmlElement = driver.findElement(By.tagName('html')),
            newHtmlElementId = newHtmlElement.getId(),
            oldHtmlElementId = oldHtmlElement.getId();

        // compare the id of the html tag on the page with the one we just got
        //  and if it's no longer the same one, we must be on the new page.
        return oldHtmlElementId !== newHtmlElementId;
    }, timeout);
}

describe( "index.html in browser", function() {
    before( (done) => {
        driver.get('file://'+path.join(process.cwd(), 'index.html')).then(done);
    });
    it('should contain #app', (done) => {
        chai.expect('body > #app').dom.to.have.count(1).then(done);
    });
    after( (done) => {
        driver.quit().then(done);
    });
});