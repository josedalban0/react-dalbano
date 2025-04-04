import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        let q = collection(db, "productos");
        if (categoria) {
          q = query(q, where("categoria", "==", categoria));
        }
        const querySnapshot = await getDocs(q);
        const productosArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosArray);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <div>
      <h1>Productos {categoria && `de ${categoria}`}</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <img src={producto.imagen} alt={producto.nombre} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
