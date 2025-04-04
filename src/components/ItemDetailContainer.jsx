import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "productos", id); // Asegurate de que la colección se llama "productos"
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({ id: productSnap.id, ...productSnap.data() });
      } else {
        console.error("El producto no existe");
      }
    };

    fetchProduct();
  }, [id]);

  console.log("Renderizando ItemDetailContainer", product);

  if (!product) return <p className="text-center mt-5">Cargando...</p>;

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold text-xl">${product.price}</p>

      {!added ? (
        <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
      ) : (
        <p className="text-green-600 mt-2">¡Agregado al carrito!</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
