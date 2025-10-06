import React from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { products, loading, error } = useProducts();
  // console.log(products);
  // const product = products.find((p) => String(p.id) === id);
  const product = products.find((p) => p.id === Number(id));
  // console.log(typeof id);
  // console.log(product);
  if (loading) return <p>Loading....</p>;
  const { name, image, price, category, description } = product || {};

  const handleAddToWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    // console.log(existingList);
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      // if (isDuplicate) return alert("Sorry vai");
      if (isDuplicate) {
        toast.warning("This product is already in your wishlist!", {
          position: "top-center",
          // autoClose: 2000,
        });
        return;
      }
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    toast.success("Added to wishlist 💖", {
      position: "top-center",
      // autoClose: 2000,
    });
  };

  return (
    <div className="card bg-base-100 border shadow-sm">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToWishList} className="btn btn-outline">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
