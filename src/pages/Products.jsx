import React from "react";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  return (
    <div>
      <h1>Products: {products.length}</h1>
    </div>
  );
};

export default Products;
