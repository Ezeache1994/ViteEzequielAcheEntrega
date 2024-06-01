import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../2CartContext/1CartContext/CartContext";
import { logDonationDetails } from "./logDonationDetails";

import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Button variant="danger" size="md" className="Buttons" onClick={() => removeFromCart(donation.product.id, donation.quantity)}>Eliminar todos</Button>      
      <Button className="Buttons" variant="success" size="md" onClick={handleEndDonation}>Donar</Button>
      </div>
      
    </div>
  );
}






















