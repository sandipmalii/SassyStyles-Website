// ShopContext.js
import React, { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// Create context
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add item to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size.");
      return;
    }

    const cartData = structuredClone(cartItems); // or use deep clone fallback

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
    toast.success("Item added to cart!");
  };

  // Get total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const count = cartItems[itemId][size];
        if (typeof count === "number" && count > 0) {
          totalCount += count;
        }
      }
    }
    return totalCount;
  };

  // Update quantity
  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    if (!cartData[itemId]) return;

    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);
  };

  // Get cart total price
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(product => product._id === itemId);
      if (!itemInfo) continue;

      for (const size in cartItems[itemId]) {
        const count = cartItems[itemId][size];
        if (typeof count === "number" && count > 0) {
          totalAmount += itemInfo.price * count;
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
