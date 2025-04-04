import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col items-center mt-4 border p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={handleDecrease}>
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;