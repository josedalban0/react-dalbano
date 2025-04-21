import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Productos {categoria && `de ${categoria}`}
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <li
            key={producto.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              width="200"
              className="my-2"
            />
            <Link
              to={`/producto/${producto.id}`}
              className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ver Detalle
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
