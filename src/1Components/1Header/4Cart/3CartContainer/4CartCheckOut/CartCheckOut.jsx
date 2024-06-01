import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../2CartContext/1CartContext/CartContext";
import "./CartCheckOut.css"

export default function CartCheckOut() {
    const { cart } = useContext(CartContext); // Añade el uso del contexto del carrito
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Almacenar el carrito en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Almacenar los datos del formulario en localStorage
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    // Función para manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Función de validación para el correo electrónico
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail|yahoo|outlook)\.com$/;
        return emailPattern.test(email);
    };

    // Efecto para habilitar o deshabilitar el botón según el estado del formulario
    useEffect(() => {
        const { name, email, phone } = formData;
        if (name && phone && validateEmail(email)) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [formData]);

    return (
        <section className="Container_Inputs--Banner">
            <h1 style={{ margin: "0.5rem 0 0.5rem 0", padding: "1rem" }}>
                Rellene sus datos para finalizar transacción
            </h1>
            <div className="InputsUser">
                <form action="" className="InputsFormUser">
                    <input
                        required
                        className="Inputs"
                        type="text"
                        name="name"
                        placeholder="Nombre y Apellido"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        required
                        className="Inputs"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        required
                        className="Inputs"
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </form>
                <Link className="LinkButton" to={isButtonDisabled ? "#" : "/summary"}>
                    <button className="FinishButton" disabled={isButtonDisabled}>
                        Finalizar
                    </button>
                </Link>
            </div>
            <figure className="Banner">
                <h5>
                    Muchas Gracias por tu donación, tu aporte puede cambiar el mundo.
                </h5>
            </figure>
        </section>
    );
}

























