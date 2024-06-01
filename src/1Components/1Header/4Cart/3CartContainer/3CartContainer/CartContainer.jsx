import React, { useContext } from "react";
import CartContext from "../../2CartContext/1CartContext/CartContext";
import CartDetails from "../2CartDetail/CartDetail";
import "./CartContainer.css";
import { Link } from "react-router-dom";

export default function CartContainer() {
    const { cart, cartTotalDonation } = useContext(CartContext);
    
    return (
        <div className="CartContainer">
            {cart.length === 0 ? (
                <div className="LinkContainer">
                    <Link className="LinkFinalizar" to={"/check"}>
                        <button>
                            Finalizar Transacción
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="ContainersInfo">
                    <CartDetails cart={cart} cartTotalDonation={cartTotalDonation} />
                </div>
            )}
        </div>
    );
}

























