import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handelRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = existingList.filter((p) => p.id !== id);

    // for ui instant update
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    toast.success("Removed from wishlist");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">({wishlist.length})</span>
        </h1>

        <label className="w-full max-w-xs">
          <select
            className="select border-gray-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low -&gt; High</option>
            <option value="price-desc">High -&gt; low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <p className="font-semibold">${p.price}</p>
              <button
                onClick={() => handelRemove(p.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
