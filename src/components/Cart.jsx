import { useCart } from "../context/CartContext";
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const createOrder = async () => {
    const order = {
      buyer: {
        name: "Cliente Genérico",
        email: "cliente@ejemplo.com",
        phone: "123456789",
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.nombre,
        price: item.precio,
        quantity: item.cantidad,
      })),
      total,
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

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
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
          >
            Vaciar carrito
          </button>
          <button
            onClick={createOrder}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Finalizar compra
          </button>
        </>
      )}

      {orderId && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">
            ¡Gracias por tu compra!
          </h2>
          <p>
            Tu ID de orden es:{" "}
            <span className="font-mono text-sm">{orderId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
