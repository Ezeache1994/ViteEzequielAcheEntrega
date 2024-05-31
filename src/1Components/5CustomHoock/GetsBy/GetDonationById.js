import { doc, getDoc, getFirestore } from "firebase/firestore";

// Función para obtener producto por ID desde Firestore
export const getProductById = async (id) => {
    const db = getFirestore(); // Inicializar Firestore
    const productRef = doc(db, "products", id); // Crear referencia al documento

    try {
        const docSnap = await getDoc(productRef); // Obtener documento
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }; // Devolver datos si el documento existe
        } else {
            throw new Error("No such document!"); // Lanzar error si no existe
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error; // Lanzar error si ocurre
    }
};




















