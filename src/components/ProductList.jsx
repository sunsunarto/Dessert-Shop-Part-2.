import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ products, onUpdateCart, cartItems }) {
    return (
      <div className="body">
      <h1>Dessert shop</h1>
        <div className="productList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          
          product={product}
          onUpdateCart={onUpdateCart}
          cartItems={cartItems}
        />
      ))}
    </div>
    </div>
    );
}

export default ProductList;
