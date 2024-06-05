import React from 'react';
import { NavLink } from "react-router-dom";
import "./ListContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMicrochip,faPersonDigging,faVideo,faKitchenSet } from '@fortawesome/free-solid-svg-icons';

const MisRutas = [
    {
        path:"/",
        label:""
    },
    {
        path: "/Category/Tecnologia",
        label: <><FontAwesomeIcon icon={faMicrochip} /> Tecnologia</>
    },
    {
        path: "/Category/Musica",
        label: <><FontAwesomeIcon icon={faPlay} /> Musica</>
    },
    {
        path: "/Category/Cocina",
        label: <><FontAwesomeIcon icon={faKitchenSet} /> <>Cocina</> </>
    },
    {
        path: "/Category/Construccion",
        label: <><FontAwesomeIcon icon={faPersonDigging} /> Construccion   </>
    },
    {
        path: "/Category/Cine",
        label: <><FontAwesomeIcon icon={faVideo} /> <>Cine</> </>
    },
];

export default function CategoryList() {
    return (
        <nav>
            <ul style={{display:"flex", justifyContent:"space-between"}}>
                {MisRutas.map((ruta, index) => (
                    <li className='Nav' key={index}>
                        <NavLink
                            style={{ padding: "0.9rem", color:"white", fontSize:"1.4rem" }}
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                            to={ruta.path}
                        >
                            {ruta.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}














