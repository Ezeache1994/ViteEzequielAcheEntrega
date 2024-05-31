import { useEffect, useState } from "react";
import { getProductByCategory } from "../GetsBy/GetDonationByCategory";


export default function useProductByCategory(category) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        getProductByCategory(category)
        .then((products) => {
          setProducts(products);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [category]);
  
    return {
      products,
      loading,
    };
  }











