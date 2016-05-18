import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

// Remove stylesheets because we do not extract them into a css file
// in development mode
if (__DEVSERVER__) {
  config.link = config.link.filter(l => l.rel !== 'stylesheet');
}

const Meta = () => (
  <Helmet
    htmlAttributes={{"lang": "en", "amp": undefined}}
    title="Billa's Blog" meta={config.meta}
    link={config.link}
  />
)


ReactDOMServer.renderToString(<Meta />);
const header = Helmet.rewind(); //call rewind() after ReactDOM.renderToString or ReactDOM.renderToStaticMarkup to get the head data for use in your prerender.

export default header;
