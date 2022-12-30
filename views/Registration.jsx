/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <div className="container">
        <form method="POST" action="/auth/register" className="register">
          <label htmlFor="loginInput">Login</label>
          <input
            name="name"
            className="name"
            id="loginInput"
            type="text"
            required
          />

          <label htmlFor="emailInput">Email</label>
          <input
            name="email"
            className="email"
            id="emailInput"
            type="email"
            required
          />

          <label htmlFor="passwordInput">Password</label>
          <input
            name="password"
            className="password"
            id="passwordInput"
            type="password"
            required
          />
          <button className="button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <a href="/auth/login">
          <div id="voiti">Если вы зарегистрированы?Войдите в аккаунт</div>
        </a>
      </div>
    </Layout>
  );
}

module.exports = Reg;
