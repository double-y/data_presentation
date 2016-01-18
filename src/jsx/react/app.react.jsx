import React from 'react';

var Reveal = require('reveal');

export class App extends React.Component{
    componentDidMount() {
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
    }
    render() {
        return (
            <div className="reveal">
                <div className="slides">
                    <section>Single Horizontal Slide</section>
                    <section>
                        <section>Vertical Slide 1</section>
                        <section>Vertical Slide 2</section>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = App;
