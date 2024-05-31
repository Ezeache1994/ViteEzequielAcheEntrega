import CartItem from "../1CartItem/CartItem";

export default function CartDetails({ cart, cartTotalDonation }) {
    return (
        <div>
            <div>
                {cart.length === 0 ? (
                    <h1>no hay productos en el carrito</h1>
                ) : cart.map((donation) => (
                    <CartItem key={donation.product.id} donation={donation} />
                ))}
            </div>            
        </div>
    );
}














