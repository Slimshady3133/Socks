/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne%20Tactile&display=swap"
          rel="stylesheet"
        />

        <script defer src="/js/application.js" />

        <title>Generator Socks</title>
      </head>
      <body>
        <header
          role="banner"
          className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white"
        >
          <div className="max-w-700 center wrap-float">
            <nav className="clearfix mar-b-1">
              <ul className="no-bullets no-margin no-padding right" />
            </nav>

            <div className="logo-container">
              <img
                className="logo center block"
                src="/img/socks.png"
                width={100}
                alt="logo"
              />
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">{children}</div>
        </div>
      </body>
    </html>
  );
};
