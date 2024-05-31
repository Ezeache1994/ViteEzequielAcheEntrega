// src/context/CartProvider.jsx
import { useEffect, useState } from "react";
import CartContext from "../1CartContext/CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (donation, quantity) => {
    const existingDonationIndex = cart.findIndex(
      (item) => item.product.id === donation.id
    );

    if (existingDonationIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingDonationIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: donation, quantity }]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (donationId, quantity) => {
    const updatedCart = cart
      .map((item) => {
        if (item.product.id === donationId) {
          return { ...item, quantity: item.quantity - quantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const endDonation = (donation) => {
    alert(`¡Felicidades! Has donado a ${donation.product.title}`);
    removeFromCart(donation.product.id, donation.quantity);
  };

  const cartTotal = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, endDonation, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}








































