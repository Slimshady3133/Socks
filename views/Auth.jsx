const React = require('react');
const Layout = require('./Layout');

function Auth() {
  return (
    <Layout>
      <div className="container">
        <form method="POST" action="/auth/login" className="register">
          {/* <label htmlFor="loginInput">Login</label>
          <input name="name" id="loginInput" type="text" required /> */}

          <label htmlFor="emailInput">Email</label>
          <input name="email" id="emailInput" type="email" required />

          <label htmlFor="passwordInput">Password</label>
          <input name="password" id="passwordInput" type="password" required />

          <button id="knopka" type="submit">
            Войти
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Auth;
