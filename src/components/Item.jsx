import React from "react";
import './Item.css'

function Item({ id, imgUrl, title, price }) {
  return (
    <div className="Item">
      <img src={imgUrl} alt={title} />
      <h2 className="Item__title">{title}</h2>
      <p className="Item__price">{price}</p>
    </div>
  );
}

export default Item;
