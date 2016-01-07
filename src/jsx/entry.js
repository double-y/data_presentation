import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

var async = require('async');
var Reveal = require('reveal');

var App = React.createClass({
    render: function(){
        return (
            <h1>hello</h1>
        )
    }
});

(function(){
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide'//, // none/fade/slide/convex/concave/zoom
        // Optional reveal.js plugins
        /*dependencies: [
         { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
         { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
         { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
         { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
         { src: 'plugin/zoom-js/zoom.js', async: true },
         { src: 'plugin/notes/notes.js', async: true }
         ]*/
    });
    ReactDom.render(<App/>, document.getElementById('app'));
})();
