import React from 'react';
import { NavLink } from "react-router-dom";
import "./ListContainer.css" ;
const MisRutas = [

    {
        path: "/Category/Tecnologia",
        label: "Tecnologia "
    },
    {
        path: "/Category/Musica",
        label: " Musica "
    },
    {
        path: "/Category/Cocina",
        label: " Cocina"
    },
    {
        path: "/Category/Construccion",
        label: " Construccion"
    },
    {
        path: "/Category/Cine",
        label: " Cine"
    },

];

export default function CategoryList() {
    return (
        <nav>
            <ul style={{display:"flex", justifyContent:"space-between", 
            }}>
                {MisRutas.map((ruta, index) => (
                    <li  className='Nav' key={index}>
                        <NavLink
    style={{ padding: "0.9rem", color:"white", fontSize:"1.4rem" }}
    className={({ isActive }) => (isActive ? "active-link" : "")}
    to={ruta.path}
    onClick={() => setCategory(ruta.label.trim())} // Aquí pasamos la categoría seleccionada
>
    {ruta.label}
</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}













