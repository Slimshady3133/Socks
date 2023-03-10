const React = require('react');
const Layout = require('./Layout');

module.exports = function LikesCard({ el }) {
  return (
    <div className="itemfav">
      <div className="buttonsFav" key={el['Picture.id']}>
        <a
          deletidfav={el['Picture.id']}
          className="deleteBtnFav deleteLinkFav"
          href={`/render/basket/${el['Picture.id']}`}
        />
      </div>
      <div className="image">
        <img width="70px" src={el['Picture.sock_url']} alt="" />
      </div>
    </div>
  );
};
