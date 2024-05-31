import { collection, getDocs, getFirestore } from "firebase/firestore";

// Función para obtener todos los productos desde Firestore
export const getAllProducts = async () => {
    const db = getFirestore(); // Inicializar Firestore
    const productsRef = collection(db, "products"); // Referencia a la colección "products"

    try {
        const querySnapshot = await getDocs(productsRef); // Ejecutar consulta
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products; // Devolver productos obtenidos
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error; // Lanzar error si ocurre
    }
};
