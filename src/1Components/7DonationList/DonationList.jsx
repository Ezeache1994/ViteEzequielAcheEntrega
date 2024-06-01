import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../2Items/4ItemListContainer/ItemListContainer";
import { getProductByCategory } from "../5CustomHoock/GetsBy/GetDonationByCategory";
import { getAllProducts } from "../5CustomHoock/GetsBy/getAllProducts";


export default function DonationList() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let data;
      if (params.CategoryName) {
        data = await getProductByCategory(params.CategoryName);
      } else {
        data = await getAllProducts();
      }
      setProducts(data);
    };

    fetchProducts();
  }, [params.CategoryName]);

  return (
    <div>
      <ItemListContainer category={params.CategoryName} products={products} />
    </div>
  );
}
