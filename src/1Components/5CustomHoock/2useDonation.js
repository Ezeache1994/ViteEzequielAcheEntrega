import { useEffect,useState } from "react";
import { getProductById } from "./GetsBy/GetDonationById";




export default function useDonation(id){
    const [products, setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        getProductById(id)
        .then((data)=>setProducts(data))
        .finally(()=>setIsLoading(false))
    },[])
return{products,isLoading};
};