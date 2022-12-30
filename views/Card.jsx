const React = require('react');
const Layout = require('./Layout');

module.exports = function Card({ el }) {
  // console.log(el)
  return (
    <div className="item">
      <div className="buttons" key={el['Pictures.id']}>
        <a
          deletid={el['Pictures.id']}
          className="deleteBtn deleteLink"
          href={`/render/basket/${el['Pictures.id']}`}
        />
      </div>
      <div className="image">
        <img width="70px" src={el['Pictures.sock_url']} alt="" />
      </div>
      <div className="description">
        <span>White</span>
      </div>
      <div inputid={el.id} className="quantity">
        <button className="plusBtn" type="submit" name="button">
          +
        </button>
        <input className="inputC" type="text" name="nameInput" value="1" />
        <button className="minusBtn" type="submit" name="button">
          -
        </button>
      </div>
      <div className="totalPrice">549</div>
    </div>
  );
};
