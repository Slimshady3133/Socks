const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ userId }) {
  return (
    <Layout>
      {userId ? (
        <div className="conteiner conteinerMain">
          <div className="mainItem">
            <img src="/img/tree.gif" alt="tree" />
            <div>
              <h2>Здравствуй, {userId.name}!</h2>
              <br />
              <p>
                С помощью нашего редактора ты сможешь создать новогодний дизайн
                носков, добавь картинку команды в которую хочешь попасть и
                выбери цвет!
              </p>
              <a href="/home">
                <button className="button" type="submit">
                  Lets GO! Create Socks
                </button>
              </a>
              <div className="headerText">
                <br />
                Наша команда:
              </div>
              <div className="headersContainer">
                <div className="blockIgor"></div>
                <div className="blockFarit"></div>
                <div className="blockPasha"></div>
                <div className="blockNastya"></div>
              </div>
            </div>
          </div>
          <img src="/img/tree.gif" alt="tree" />
        </div>
      ) : (
        <div className="conteiner conteinerMain">
          <img src="/img/tree.gif" alt="tree" />
          <div className="mainItem">
            <div>
              <h2>Здравствуй, друг!</h2>
              <br />
              <p>
                С помощью нашего редактора ты сможешь создать новогодний дизайн
                носков, добавь картинку команды в которую хочешь попасть и
                выбери цвет!
                <p>Чтобы создать носок необходимо авторизоваться.</p>
              </p>
              <div className="headerText">
                <br />
                Наша команда:
              </div>
              <div className="headersContainer">
                <div className="blockIgor"></div>
                <div className="blockFarit"></div>
                <div className="blockPasha"></div>
                <div className="blockNastya"></div>
              </div>
            </div>
          </div>

          <img src="/img/tree.gif" alt="tree" />
        </div>
      )}
    </Layout>
  );
};
