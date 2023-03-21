import React from "react";
import Item from "./Item";
import "./TopSeller.css";

function TopSeller() {
  const data = [
    {
      itemId: 0,
      imageUrl: "src/assets/topSellers/0.webp",
      title: "Personalised Gryffindor Robe",
      price: "£4.95",
    },
    {
      itemId: 1,
      imageUrl: "src/assets/topSellers/1.webp",
      title: "Bottled Butterbeer 4-Pack",
      price: "£13.95",
    },
    {
      itemId: 2,
      imageUrl: "src/assets/topSellers/2.webp",
      title: "Exploding Bon Bons",
      price: "£8.00",
    },
    {
      itemId: 3,
      imageUrl: "src/assets/topSellers/3.webp",
      title: "Personalised Slytherin Robe",
      price: "£59.96",
    },
    // {
    //   itemId: 4,
    //   imageUrl: "src/assets/topSellers/4.webp",
    //   title: "Fizzing Whizzbees Chocolate",
    //   price: "£8.00",
    // },
  ];

  return (
    <div className="TopSeller">
      <div className="TopSeller__heading">
        <h1>Top Sellers</h1>
      </div>
      <div className="TopSeller_carousel">
        {data.map((item) => (
          <Item
          key={item.itemId}
            id={item.itemId}
            imgUrl={item.imageUrl}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TopSeller;
