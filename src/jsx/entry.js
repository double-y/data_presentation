import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import App from './react/app.react.jsx';

var async = require('async');
(function(){
    ReactDom.render(<App/>, document.getElementById('app'));
})();
