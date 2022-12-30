const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ userId }) {
  return (
    <Layout>
      {userId ? (
        <div className="conteiner conteinerMain">
          <div className="mainItem">
            <div>
              <h2>Здравствуй, {userId.name}!</h2>
              <br />
              <p>
                С помощью нашего редактора ты сможешь создать уникальный дизайн
                носков, добавить надпись или рисунок из нашей библиотеки. После
                того, как вы оформите макет, нажмите кнопку «Корзина» для
                завершения покупки.
              </p>
              <div className="headerText">
                <br />
                Наши амбассадоры:
              </div>
              <div className="headersContainer">
                <div className="block">
                  <img src="/img/homer.png" className="homer" alt="..." />
                </div>
                <div className="block">
                  <img src="/img/couagmir.png" className="couagmir" alt="..." />
                </div>
                <div className="block">
                  <img src="/img/bender.png" className="bender" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="mainItem">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/носки/гомер/Group 12.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/носки/пончик/Group 13.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/носки/патрик/Group 2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="conteiner conteinerMain">
          <div className="mainItem">
            <div>
              <h2>Здравствуй, друг!</h2>
              <br />
              <p>
                С помощью нашего редактора ты сможешь создать уникальный дизайн
                носков, добавить надпись или рисунок из нашей библиотеки. После
                того, как вы оформите макет, нажмите кнопку «Корзина» для
                завершения покупки.
                <p>
                  Чтобы посмотреть конструктор носков или оформить заказ
                  необходимо авторизоваться.
                </p>
              </p>
              <div className="headerText">
                <br />
                Наши амбассадоры:
              </div>
              <div className="headersContainer">
                <div className="block">
                  <img src="/img/homer.png" className="homer" alt="..." />
                </div>
                <div className="block">
                  <img src="/img/couagmir.png" className="couagmir" alt="..." />
                </div>
                <div className="block">
                  <img src="/img/bender.png" className="bender" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="mainItem">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/носки/гомер/Group 12.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/носки/пончик/Group 13.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/носки/патрик/Group 2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
