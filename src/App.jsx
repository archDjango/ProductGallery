import React from "react";
import ProductGallery from "./components/ProductGallery";
import "./styles/App.css"; // You can create this for global styles if needed

export default function App() {
  return (
    <div className="app-container">
      <ProductGallery />
    </div>
  );
}
