import React from "react";

const Product = ({ product }) => (
  <div className="item">
    <div className="imgBox">
      <img src={product.imgSrc} alt={product.name} />
    </div>
    <div className="textBox">
      <p className="textBox__name">{product.name}</p>
      <p className="textBox__price">{product.price}</p>
    </div>
  </div>
);