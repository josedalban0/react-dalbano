import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products.find((p) => p.id === parseInt(id)));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold text-xl">${product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">Agregar al carrito</button>
    </div>
  );
};
export default ItemDetailContainer;