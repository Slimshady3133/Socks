const React = require('react');
const Layout = require('./Layout');

const Card = require('./Card');

function Basket({ socks, user }) {
  return (
    <Layout user={user}>
      <a className="comeback" href="/home"><button className="button">Вернуться назад</button></a>
      <div className="shoppingCart">
        <div className="title">Корзина</div>
        {socks.map((el) => (
          <Card el={el} />
        ))}
      </div>
      
    </Layout>
  );
}
module.exports = Basket;
