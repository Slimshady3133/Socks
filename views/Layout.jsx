/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Syne%20Tactile&display=swap"
          rel="stylesheet"
        />

        <script defer src="/js/application.js" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />

        <script defer src="/js/jscolor.js" />

        <title>Generator Socks</title>
      </head>
      <body>
        <header
          role="banner"
          className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white"
        >
          <div className="max-w-700 center wrap-float">
            {/* <nav className="clearfix mar-b-1">
              <ul className="no-bullets no-margin no-padding right" />
            </nav> */}

            {/* <nav class="navbar navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="/">
                  <img
                    src="/img/socks.png"
                    alt=""
                    width="45"
                    height="34"
                    alt="logo"
                  />
                </a>
              </div>
            </nav> */}

            <div className="logo-container">
              <a href="/">
                {' '}
                <img
                  className="logo center block"
                  src="/img/socks.png"
                  width={100}
                  alt="logo"
                />
              </a>
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
