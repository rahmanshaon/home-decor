import { toast } from "react-toastify";

// get
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save
export const updateList = (product) => {
  const wishlist = loadWishlist();

  try {
    const isDuplicate = wishlist.some((p) => p.id === product.id);
    if (isDuplicate)
      return toast.warning("This product is already in your wishlist!");
    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast("Added to wishlist");
  } catch (err) {
    console.log(err);
  }
};

// delete
export const removeFromWishlist = (id) => {
  const wishlist = loadWishlist();
  try {
    const updatedWishlist = wishlist.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Removed from wishlist");
  } catch (err) {
    console.log(err);
  }
};
