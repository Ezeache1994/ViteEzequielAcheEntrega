import React from "react";
import useDonations from "../../5CustomHoock/3useDonations";
import ItemList from "../3ItemList/ItmeList";
import"./ItemListContainer.scss"

export default function ItemListContainer({ category }) { // Agrega category como prop
    const { isLoading, products } = useDonations();

    if (isLoading) return (
        <div style={{ textAlign: "center", display: "flex", justifyContent:"center" }}>
            <img className="imgCarga" style={{width:"500px", textAlign:"center",}} src="/public/HaloGive.png" alt="_blank" />
            <img className="imgCarga" style={{width:"500px", textAlign:"center",}} src="/public/HaloGive.png" alt="_blank" />
            <img className="imgCarga" style={{width:"500px", textAlign:"center",}} src="/public/HaloGive.png" alt="_blank" />
            <img className="imgCarga" style={{width:"500px", textAlign:"center",}} src="/public/HaloGive.png" alt="_blank" />
            <img className="imgCarga" style={{width:"500px", textAlign:"center",}} src="/public/HaloGive.png" alt="_blank" />
        </div>
    );

    // Si se proporciona una categoría, filtra los productos por esa categoría
    const filteredProducts = category ? products.filter(product => product.Category === category) : products;

    return (
        <div className="ItemListContainer__All--Elements">
            <ItemList products={filteredProducts} />
        </div>
    );
};