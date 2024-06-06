import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"; 
export default function Item({ item }) {
  return (
    <div className="Container_of_All_Items">
      <div className="First--Container__all--Items"> 
      <Link to={`/product/${item.id}`}>
        <div className="all--Items__IMG"> 
          <img className="IMG__Items" src={item.image} alt={item.title} />
        </div>
      </Link>
        <h2  className="Second--Container__Item--Title">{item.title}</h2> 
      <p className="Second--Container__Item--Description">{item.description}</p> 
    </div>
    </div>
  );
}
    