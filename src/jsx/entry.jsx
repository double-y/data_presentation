import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import App from './react/app.react.jsx';

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDom.render(<App></App>, document.body);
});