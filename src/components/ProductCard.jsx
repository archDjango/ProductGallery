import React from "react";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}
