import { useState } from "react";
import "../styles/ProductGallery.css";
import natureImg from "../assets/oven.jpeg";
import techImg from "../assets/iphone.jpeg";
import artImg from "../assets/art.jpeg";
import play from "../assets/playstation.jpeg";
import ProductCard from "./ProductCard";
import Timer from "./Timer";

const products = [
  { id: 1, name: "Oven", category: "Appliances", image: natureImg },
  { id: 2, name: "iPhone", category: "Technology", image: techImg },
  { id: 3, name: "Modern Painting", category: "Art", image: artImg },
  { id: 4, name: "Playstation", category: "Technology", image: play },
  
];

export default function ProductGallery() {
  const [filter, setFilter] = useState("All");
  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Product Gallery</h1>
      <div className="filter-buttons">
        {["All", "Appliances", "Technology", "Art"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <Timer />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
