import React from "react";
import './Item.css'

function Item({ id, imgUrl, title, price }) {
  return (
    <div className="Item">
      <p>{id}</p>
      <p>{imgUrl}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
