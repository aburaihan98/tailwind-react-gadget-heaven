import { toast } from "react-toastify";

// carts section start
// get cart
const getToCartLocalStorage = () => {
  const products = localStorage.getItem("products");

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
};

// add cart
const addToCartLocalStorage = (product) => {
  const products = getToCartLocalStorage();

  const exits = products?.find(
    (item) => item?.product_id === product?.product_id
  );

  if (exits) {
    return toast.error("This item has been added to cart already 😈");
  } else {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    toast.success("Item added to cart");
  }
};

// delete cart
const deleteToCartLocalStorage = (id) => {
  const products = getToCartLocalStorage();

  const filtered = products.filter((product) => product?.product_id !== id);

  localStorage.setItem("products", JSON.stringify(filtered));
  toast.error("This item deleted from cart");
};

const clearToCartLocalStorage = () => {
  localStorage.removeItem("products");
};
// carts section end

// wish List section start
// get wish list
const getToWishlistLocalStorage = () => {
  const products = localStorage.getItem("wishlist");

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
};

// add wish list
const addToWishlistLocalStorage = (product) => {
  const products = getToWishlistLocalStorage();

  const exits = products?.find(
    (item) => item?.product_id === product?.product_id
  );

  if (exits) {
    return alert("This item has been added to Wish list already😈");
  } else {
    products.push(product);
    localStorage.setItem("wishlist", JSON.stringify(products));
    toast.success("Item added to Wish list");
  }
};

// delete wish list
const deleteToWishlistLocalStorage = (id) => {
  const products = getToWishlistLocalStorage();

  const filtered = products.filter((product) => product?.product_id !== id);

  localStorage.setItem("wishlist", JSON.stringify(filtered));
  toast.error("This item deleted from Wish List");
};
// wishList section end

export {
  addToCartLocalStorage,
  addToWishlistLocalStorage,
  clearToCartLocalStorage,
  deleteToCartLocalStorage,
  deleteToWishlistLocalStorage,
  getToCartLocalStorage,
  getToWishlistLocalStorage,
};
