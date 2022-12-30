const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <header>
      <div className="conteiner conteinerHeader">
        <a className="logoImg" href="/">
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
                  <button type="submit" className="exm">
                    Выйти
                  </button>
                </a>
              </li>
            </ul>
          ) : (
            <div>
              <a className="linkAll" href="/auth/register">
                <button type="submit" className="exm">
                  Зарегистрироваться
                </button>
              </a>
              <a className="linkAll" href="/auth/login">
                <button type="submit" className="exm">
                  Войти
                </button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};