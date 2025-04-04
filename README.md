# 🛒 Proyecto Final - E-commerce en React

Este proyecto es una aplicación web de tipo e-commerce desarrollada como entrega final del curso de React. Se trata de una Single Page Application (SPA) que permite explorar productos, ver sus detalles y simular una compra a través de un formulario de checkout.

## Funcionalidades Implementadas

- Listado dinámico de productos desde Firestore
- Vista detallada por producto
- Navegación por categorías
- Carrito de compras con conteo de unidades
- Checkout con formulario y registro de orden en Firebase
- Estilos responsivos con TailwindCSS
- Renderizado condicional (carrito vacío, sin stock, carga de datos)

## Tecnologías Utilizadas

- React (Vite)
- React Router DOM
- Context API para el carrito
- Firebase / Firestore como base de datos
- TailwindCSS para estilos
- Lucide React para iconografía

## Estructura de Archivos

/src  
├── components  
│   ├── Cart.jsx  
│   ├── CartItem.jsx  
│   ├── CartWidget.jsx  
│   ├── CheckoutForm.jsx  
│   ├── Item.jsx  
│   ├── ItemCount.jsx  
│   ├── ItemDetail.jsx  
│   ├── ItemDetailContainer.jsx  
│   ├── ItemList.jsx  
│   ├── ItemListContainer.jsx  
│   └── NavBar.jsx  
├── context  
│   └── CartContext.jsx  
├── firebase  
│   └── config.js  
├── App.jsx  
└── main.jsx  

## Firebase Config

Se utilizó Firebase Firestore para:

- Almacenar los productos (colección: `productos`)
- Registrar las órdenes de compra (colección: `ordenes`)