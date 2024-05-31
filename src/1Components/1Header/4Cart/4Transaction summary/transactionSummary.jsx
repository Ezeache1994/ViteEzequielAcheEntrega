import React, { useContext, useEffect, useState } from "react";
import CartContext from "../2CartContext/1CartContext/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./transactionSummary.css" ;
export default function TransactionSummary() {
    const { cart } = useContext(CartContext);
    const [donations, setDonations] = useState([]);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    // Cargar las donaciones desde el localStorage al montar el componente
    useEffect(() => {
        const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
        setDonations(storedDonations);
    }, []);

    // Función para eliminar la información del local storage y redirigir al inicio
    const handleGoToStart = () => {
        localStorage.removeItem("donations");
        navigate("/");
    };

    // Manejar el click en el botón
    const handleClick = () => {
        setClicked(true);
        handleGoToStart();
    };

     useEffect(() => {
         const timer = setTimeout(() => {
             if (!clicked) {
                 handleGoToStart();
             }
         }, 3000);

         return () => clearTimeout(timer);
     }, [clicked]);

    return (
        <div className="AllSummary">
            <h2 className="SummaryTitle">Resumen de transacción</h2>
            {donations.map((donation) => (
                <div className="DonationItem" key={donation.product.id}>
                    <h3 className="DonationToken">Token de Transacción: {donation.product.token}</h3>
                    <img className="DonationImage" src={donation.product.image} alt={donation.product.title} />
                    <p className="DonationAmount">Monto donado: {donation.quantity}</p>
                </div>
            ))}
            <Link className="LinkButton" to={"/"}>
                <button className="StartButton" onClick={handleClick}>
                    Volver al Inicio
                </button>
            </Link>
        </div>
    );
}































