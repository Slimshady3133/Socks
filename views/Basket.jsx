const React = require('react');
const Layout = require('./Layout');

const Card = require('./Card');

function Basket({ socks, user }) {
  return (
    <Layout user={user}>
      <div className="shoppingCart">
        <div className="title">Shopping Bag</div>
        {socks.map((el) => (
          <Card el={el} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Basket;
