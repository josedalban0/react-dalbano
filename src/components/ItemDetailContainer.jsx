import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
      <p className="mb-2">{producto.descripcion}</p>
      <p className="mb-2">Precio: ${producto.precio}</p>
      <img src={producto.imagen} alt={producto.nombre} width="300" />
      <button
        onClick={() => addToCart({ ...producto, cantidad: 1 })}
        className="block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
