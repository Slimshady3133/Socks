/* eslint-disable react/prop-types */
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />
        {/* <link rel="stylesheet" href="/css/normalize.css" /> */}

        <script src="/js/application.js" defer />
        <script src="/js/basketbtn.js" defer />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        />
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
        <NavBar user={user} />
        <main>{children}</main>
        <footer>
          <div className="conteiner conteinerFooter">
            <ul className="footerList">
              <li className="footerItem">
                г. Санкт-Петербург, ул. Высотная, д.1
              </li>
              <li className="footerItem"> faritahmetshin@gmail.com</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
};
