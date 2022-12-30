const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <header>
      <div className="conteiner conteinerHeader">
        <a className="logoImg" href="/home">
          <img
            className="imgHeader"
            width="100px"
            src="/img/LogoSocks.png"
            alt=""
          />
        </a>
        <nav className="headerNavMenu">
          {user && user.id ? (
            <ul className="headerNavList">
              <li className="headerNavItem">
                <a className="linkAll" href="#">
                  {user.name}
                </a>
              </li>
              <li className="headerNavItem">
                <a href="/render/Like">
                  <img
                    className="imgBascket"
                    width="30px"
                    src="/img/like.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="headerNavItem">
                <a href="/render/basket">
                  <img
                    className="imgBascket"
                    width="30px"
                    src="/img/корзина.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="headerNavItem">
                <a className="linkAll" href="/auth/logout">
                  Выйти
                </a>
              </li>
            </ul>
          ) : (
            <ul className="headerNavList">
              <li className="headerNavItem">
                <a className="linkAll" href="/auth/register">
                  Зарегистрироваться
                </a>
              </li>
              <li className="headerNavItem">
                <a className="linkAll" href="/auth/login">
                  Войти
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
