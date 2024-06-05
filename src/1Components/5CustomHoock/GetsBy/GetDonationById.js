import { doc, getDoc, getFirestore } from "firebase/firestore";


export const getProductById = async (id) => {
    const db = getFirestore(); 
    const productRef = doc(db, "products", id); 

    try {
        const docSnap = await getDoc(productRef); 
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }; 
        } else {
            throw new Error("No such document!"); 
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error; 
    }
};




















