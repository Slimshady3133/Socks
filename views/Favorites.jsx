const React = require('react');
const Layout = require('./Layout');

const LikesCard = require('./LikeCard');

function Favourites({ socksLike, user }) {
  return (
    <Layout user={user}>
      <div className="shoppingCart">
        <div className="title">Favourites</div>
        {socksLike.map((el) => (
          <LikesCard el={el} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Favourites;
