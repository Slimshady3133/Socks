const React = require('react');

const Layout = require('./Layout');

function CreateSocks() {
  return (
    <Layout>
      <form method="POST" action="/user">
        <button id="knopka" type="submit">
          Exit
        </button>
      </form>
    </Layout>
  );
}

module.exports = CreateSocks;
