import React, { useContext } from "react";
import ItemCount from "../../2Items/2ItemCount/ItemCount";
import "./DonationDetail.scss";
import useCount from "../../5CustomHoock/1useCount";
import CartContext from "../../1Header/4Cart/2CartContext/1CartContext/CartContext";
import { logDonationDetails } from "../../1Header/4Cart/3CartContainer/1CartItem/logDonationDetails";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DonationDetail({ donation }) {
  const { count, increment, decrement, reset } = useCount();
  const { addToCart, clearCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (count > 0) {
      addToCart(donation, count);
      console.log("Datos del elemento añadido al carrito:", donation);
      console.log("usted ha donado:", count);
      console.log("ha escogido la iniciativa:", donation.title);
      logDonationDetails(donation); 
      reset();
          
    const cartWidget = document.getElementById("cartWidget");
    if (cartWidget) {
      cartWidget.hidden = false;
    }
    }
  };

  const handleReset = () => {
    reset();
    clearCart(); 
  };

  return (
    <div className="DonationDetailContainer">
      <h2 className="DonationDetailContainer__title">{donation.title}</h2>
      <img
        className="DonationDetailContainer__image"
        src={donation.image}
        alt={donation.title}
      />
      <ItemCount
        count={count}
        increment={increment}
        decrement={decrement}
        onAddToCart={handleAddToCart}
        />

      <div>
        <Button style={{margin:"0 1rem 0 1rem"}} Button variant="danger" size="md" onClick={handleReset}>
          Reiniciar</Button>
        <Button style={{margin:"0 1rem 0 1rem"}} variant="success" size="md"  disabled={count === 0} onClick={() => handleAddToCart(count)}>
          Donar
        </Button>
      </div>

      <h4 className="Business_volume">
          {donation.business_volume}
        </h4>
      <h1 className="DonationDetailContainer__reason-title">
        ¿
        <span className="span-Tittle" style={{ color: "springgreen", letterSpacing: "-0.1rem" }}>
          P
        </span>
        orque donarme?
      </h1>
      <h5 className="DonationDetailContainer__reason-text">
        {donation.reason_To_Donate}
      </h5>
    </div>
  );
}

























