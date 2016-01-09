var sw = require('selenium-webdriver');
var driver = new sw.Builder()
    .withCapabilities(sw.Capabilities.chrome())
    .build()

var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));
var should = chai.should();

var path = require('path')

describe( "sample browser test", function() {
    before(function(done){
        driver.get('file://'+path.join(process.cwd(), 'index.html')).then(function(){done();});
    });
    it('should contain content hello world', function(done) {
        chai.expect('body').dom.to.contains.text("hello world").then(done);
    });
    after( function(done) {
        driver.quit().then(done);
    });
});