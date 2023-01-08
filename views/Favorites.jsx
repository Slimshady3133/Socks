const React = require('react');
const Layout = require('./Layout');

const LikesCard = require('./LikeCard');

function Favourites({ socksLike, user }) {
  return (
    <Layout user={user}>
      <a className="comeback" href="/home"><button className="button">Вернуться назад</button></a>
      <div className="shoppingCart">
        <div className="title">Избранное</div>
        {socksLike.map((el) => (
          <LikesCard el={el} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Favourites;
