const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <div className="left">
        <a href="/auth/login">
          <button type="submit" className="exm">
            Enter
          </button>
        </a>
        {'  '}
        <a href="/auth/register">
          <button type="submit" className="exm">
            Registration
          </button>
        </a>
      </div>
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
