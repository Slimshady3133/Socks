const React = require('react');

function NavBar({ user }) {
  return (
    <div className="nav-flex">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active img-logo" aria-current="page" href="/">
            <img src="public/img/Socks.jpg" alt="Socks" />
          </a>
        </li>
      </ul>

      {!user && (
        <div className="navbar">
          <div className="nav justify-content-end">
            <div className="nav-item">
              <a
                className="nav-link active nav-text"
                aria-current="page"
                href="/"
              >
                Войти
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link nav-text" href="/auth/register">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
      )}

      {user && (
        <div className="navbar">
          <div className="nav-link">
            <a className="nav-text" href="/profile">
              Добро пожаловать,
              {/* {' '} */}
              {user.name}!
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
