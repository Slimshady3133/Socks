const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      {' '}
      <a id="g" href="/">
        Home
      </a>
      <a href="/auth/login">Enter</a>
      <a href="/auth/register">Registration</a>
      <div className="cssFont_1">
        Добро пожаловать на наш сайт по созданию кастомных, уникальных носков
        для каждого.
      </div>
      <a href="/auth/register">
        <button type="submit" className="examplebtn">
          Generator Socks 🧦
        </button>
      </a>
    </Layout>
  );
}

module.exports = Home;
