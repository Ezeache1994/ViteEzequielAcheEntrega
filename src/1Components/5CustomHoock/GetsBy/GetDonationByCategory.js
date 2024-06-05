import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


export const getProductByCategory = async (category) => {
    const db = getFirestore(); 
    const productsRef = collection(db, "products"); 
    const q = query(productsRef, where("Category", "==", category)); 

    try {
        const querySnapshot = await getDocs(q); 
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products; 
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error; 
    }
};
