// src/components/Carts.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carts = () => {
  // Example cart items (replace with your real cart state later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fancy Shirt",
      price: 29.99,
      quantity: 2,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 2,
      title: "Stylish Watch",
      price: 99.99,
      quantity: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/shop"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-6 border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1 ml-6">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Carts;
