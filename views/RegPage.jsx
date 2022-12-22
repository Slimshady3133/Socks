const React = require('react');
const Layout = require('./Layout');

function LoginPage() {
  return (
    <Layout>
      <form method="POST" action="/register/login">
        <label htmlFor="loginInput">Login</label>
        <input name="name" id="loginInput" type="text" required />

        <label htmlFor="emailInput">Email</label>
        <input name="email" id="emailInput" type="text" required />

        <label htmlFor="passwordInput">Password</label>
        <input name="password" id="passwordInput" type="password" required />

        <button id="knopka" type="submit">
          <a href="/create"> Зарегистрироваться</a>
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginPage;
