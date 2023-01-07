const React = require('react');
const { FaGift } = require('react-icons/fa');

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
          
                  <div className="scattering" />
                </a>
              </li>
              <li className="headerNavItem">
                <a href="/render/basket">
                  
                  <FaGift className="shop-cart-button" />
                </a>
              </li>
              <li className="headerNavItem">
                <a className="linkAll" href="/auth/logout">
                  <button type="submit" className="button">
                    Выйти
                  </button>
                </a>
              </li>
            </ul>
          ) : (
            <div>
              <a className="linkAll" href="/auth/register">
                <button type="submit" className="button">
                  Зарегистрироваться
                </button>
              </a>
              <a className="linkAll" href="/auth/login">
                <button type="submit" className="button">
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
