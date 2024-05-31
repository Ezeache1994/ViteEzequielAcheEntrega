import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"; // Importar estilos CSS

export default function Item({ item }) {
  return (
      <div className="First--Container__all--Items"> {/* Agregar la clase contenedora */}
      <Link to={`/product/${item.id}`}>
        <div className="all--Items__IMG"> {/* Agregar la clase de contenedor de imagen */}
          <img className="IMG__Items" src={item.image} alt={item.title} />
        </div>
      </Link>
        <h2  className="Second--Container__Item--Title">{item.title}</h2> {/* Agregar clase de título */}
      <p className="Second--Container__Item--Description">{item.description}</p> {/* Agregar clase de descripción */}
    </div>
  );
}
    