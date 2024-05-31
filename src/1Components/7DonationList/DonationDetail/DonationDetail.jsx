import React, { useContext } from "react";
import ItemCount from "../../2Items/2ItemCount/ItemCount";
import "./DonationDetail.scss";
import useCount from "../../5CustomHoock/1useCount";
import CartContext from "../../1Header/4Cart/2CartContext/1CartContext/CartContext";
import { logDonationDetails } from "../../1Header/4Cart/3CartContainer/1CartItem/logDonationDetails";

export default function DonationDetail({ donation }) {
  const { count, increment, decrement, reset } = useCount();
  const { addToCart, clearCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (count > 0) {
      addToCart(donation, count);
      console.log("Datos del elemento añadido al carrito:", donation); // Agregar este console.log para capturar los datos
      console.log("usted ha donado:", count);
      console.log("ha escogido la iniciativa:", donation.title);
      logDonationDetails(donation); // Llama a la función auxiliar aquí para detalles adicionales
      reset();
    }
  };

  const handleReset = () => {
    reset();
    clearCart(); // Limpiar el carrito al reiniciar
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
        <button disabled={count === 0} onClick={() => handleAddToCart(count)}>
          Donar
        </button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
      <h4>
          {donation.business_volume}
        </h4>
      <h1 className="DonationDetailContainer__reason-title">
        ¿
        <span style={{ color: "springgreen", letterSpacing: "-0.6rem" }}>
          P
        </span>
        orque donarme?
      </h1>
      <h3 className="DonationDetailContainer__reason-text">
        {donation.reason_To_Donate}
      </h3>
    </div>
  );
}
























