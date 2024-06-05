import { collection, getDocs, getFirestore } from "firebase/firestore";


export const getAllProducts = async () => {
    const db = getFirestore(); 
    const productsRef = collection(db, "products"); 

    try {
        const querySnapshot = await getDocs(productsRef); 
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
