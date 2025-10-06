import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = useLoaderData();
  const featuredProducts = products.slice(0, 6);
  console.log(products);
  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <Link className="btn btn-outline" to="/products">See All Products</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
