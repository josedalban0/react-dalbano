import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="mb-2 border-b pb-2 flex justify-between items-center"
              >
                <div>
                  <p>{item.nombre}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${item.precio}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">Total: ${total}</p>
          <button
            onClick={clearCart}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
