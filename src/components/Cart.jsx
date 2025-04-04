import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (cart.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Tu carrito está vacío 😞</h2>
        <p>¡Agregá productos para verlos acá!</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras 🛒</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
          <div>
            <h3 className="text-lg font-semibold">{item.nombre}</h3>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio unitario: ${item.precio}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
      <p className="text-xl font-bold mt-4">Total: ${total}</p>
      <button
        onClick={clearCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;
