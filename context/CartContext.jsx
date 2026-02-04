"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // 🔹 1. Load cart from localStorage AFTER client mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Invalid cart data in localStorage");
        localStorage.removeItem("cart");
      }
    }

    setHydrated(true);
  }, []);

  // 🔹 2. Save cart to localStorage whenever it changes
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, hydrated]);

  // 🔹 Add to cart
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.variantId === product.variantId
      );

      if (existing) {
        return prev.map((item) =>
          item.variantId === product.variantId
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, { ...product, qty }];
    });
  };

  // 🔹 Increase quantity
  const increaseQty = (variantId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.variantId === variantId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // 🔹 Decrease quantity
  const decreaseQty = (variantId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.variantId === variantId
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // 🔹 Set quantity manually
  const setQty = (variantId, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.variantId === variantId
          ? { ...item, qty: qty > 0 ? qty : 1 }
          : item
      )
    );
  };

  // 🔹 Remove item
  const removeItem = (variantId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.variantId !== variantId)
    );
  };

  // 🔹 Clear cart (after payment success)
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // 🔹 Derived values
  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        increaseQty,
        decreaseQty,
        setQty,
        removeItem,
        clearCart,
        hydrated, // 🔥 IMPORTANT for UI
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}


