const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <div className="container">
        <form method="POST" action="/auth/register" className="register">
          <label htmlFor="loginInput">Login</label>
          <input name="name" id="loginInput" type="text" required />

          <label htmlFor="emailInput">Email</label>
          <input name="email" id="emailInput" type="text" required />

          <label htmlFor="passwordInput">Password</label>
          <input name="password" id="passwordInput" type="password" required />

          <button id="knopka" type="submit">
            Зарегестрироваться
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
