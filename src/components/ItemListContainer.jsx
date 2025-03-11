import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.js";

const ItemListContainer = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter((p) => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link to={`/producto/${product.id}`} className="bg-blue-500 text-white px-3 py-1 mt-2 inline-block rounded">
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemListContainer;
