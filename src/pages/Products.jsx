import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  // console.log(search);

  const term = search.trim().toLowerCase();
  const searchedProducts = term
    ? products.filter((p) => p.name.toLowerCase().includes(term))
    : products;

  // console.log(searchedProducts);

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">({searchedProducts.length})</span>
        </h1>

        <label className="input border-gray-800">
          <span className="label">
            <FaSearch />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
