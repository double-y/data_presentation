/**
 * Created by yasudayousuke on 1/18/16.
 */

require('../utils/dom');
var React = require("react");
var TestUtils = require('react-addons-test-utils');
var App = require("../../jsx/react/app.react.jsx");

describe('App Component', function () {
    it('has .slides', function (done) {
        var appComp = TestUtils.renderIntoDocument(<App></App>);
        TestUtils.findRenderedDOMComponentWithClass(appComp, 'slides')
        done();
    })
});