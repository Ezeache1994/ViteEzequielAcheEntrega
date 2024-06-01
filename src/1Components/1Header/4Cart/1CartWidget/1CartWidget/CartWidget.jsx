// CartWidget.jsx
import { useContext } from "react";
import CartContext from "../../2CartContext/1CartContext/CartContext";
import CartIcon from "../2CartIcon/CartIcon";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cartTotal } = useContext(CartContext);

  return (
    <div id="cartWidget" hidden>
      <Link to={"/cart"}>
        <CartIcon />
        <span style={{color:"black", fontSize:"1.5rem"}}>{cartTotal}</span>
      </Link>
    </div>
  );
}





















