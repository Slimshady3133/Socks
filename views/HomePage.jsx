const React = require('react');

const Layout = require('./Layout');

function HomePage() {
  return (
    <Layout>
      <button id="knopka" type="submit">
        <a href="/register/login">Создать носок</a>
      </button>
    </Layout>
  );
}

module.exports = HomePage;
