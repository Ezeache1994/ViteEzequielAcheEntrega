import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

// Función para obtener productos por categoría desde Firestore
export const getProductByCategory = async (category) => {
    const db = getFirestore(); // Inicializar Firestore
    const productsRef = collection(db, "products"); // Referencia a la colección "products"
    const q = query(productsRef, where("Category", "==", category)); // Crear consulta con filtro por categoría

    try {
        const querySnapshot = await getDocs(q); // Ejecutar consulta
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
