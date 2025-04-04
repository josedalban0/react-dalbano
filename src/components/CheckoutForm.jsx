import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al procesar la orden", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
      {orderId ? (
        <p className="text-green-600">¡Compra realizada con éxito! ID de orden: {orderId}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="border p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
