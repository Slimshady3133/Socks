const React = require('react');

function NavBar({ user }) {
  return (
    <div className="nav-flex">
      {' '}
      <meta charSet="utf-8" />
      <ul className="nav">
        <a className="nav-link active img-logo" aria-current="page" href="/">
          <img src="/img/socks.png" width={50} />
        </a>

        {!user && (
          <div className="navbar">
            <div className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link active nav-text"
                  aria-current="page"
                  href="/auth/login"
                >
                  Войти
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="/register/login">
                  Зарегистрироваться
                </a>
              </li>
            </div>
          </div>
        )}
      </ul>
      {user && (
        <div className="navbar">
          <div className="nav-link">
            <a className="nav-text" href="/profile">
              Добро пожаловать,
              {/* {' '} */}
              {user.name}
            </a>
          </div>
          <div className="nav-link">
            <div className="like-position">
              <a className="nav-text" href="/favorite">
                Избранное
              </a>
            </div>
            <div className="shop-position">
              <a className="nav-text" href="/basket">
                Kорзина
              </a>
            </div>
            <div className="nav-link">
              <a className="nav-text" href="/auth/logout">
                Выйти
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = NavBar;
