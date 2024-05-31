import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../2CartContext/1CartContext/CartContext";
import { logDonationDetails } from "./logDonationDetails";
import { Link } from "react-router-dom";

export default function CartItem({ donation }) {
  const { removeFromCart, endDonation } = useContext(CartContext);

  // Llama a la función auxiliar para mostrar los detalles en la consola
  logDonationDetails(donation);

  const handleEndDonation = () => {
    endDonation(donation);    
    const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    const updatedDonations = [...storedDonations, donation];
    localStorage.setItem("donations", JSON.stringify(updatedDonations));
  };

  return (
    <div className="CartItemContainer">
      <div>
        <h2>{donation.product.title}</h2>
      </div>
      <div>
        <img
          className="CartItemContainer__image"
          src={donation.product.image}
          alt={donation.product.title}
        />
      </div>
      <div>
        <h4>Monto Donado: {donation.quantity}</h4>
      </div>
      <p>{donation.product.description}</p>

      <div>
      <button className="Buttons" onClick={() => removeFromCart(donation.product.id, donation.quantity)}>Eliminar todos</button>
      
      <button className="Buttons" onClick={handleEndDonation}>Donar</button>
      </div>
    </div>
  );
}






















