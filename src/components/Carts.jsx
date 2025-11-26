import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate = useNavigate();
  // Load cart from localStorage and ensure quantity defaults to 1

  const loadCart = () => {
    const raw = localStorage.getItem("cart");
    const data = raw ? JSON.parse(raw) : [];

    return data.map((item) => ({
      ...item,
      quantity: item.quantity ? Number(item.quantity) : 1,
      price: Number(item.price) || 0,
    }));
  };

  const [cartItems, setCartItems] = useState(loadCart);

  // Save cart when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Increase quantity
  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all
  const handleClear = () => {
    setCartItems([]);
  };

  // Calculate total safely
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/categories" className="text-blue-600 underline">
          Go Shopping
        </Link>
      </div>
    );
  }

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

              {/* Quantity controls */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>

                <span className="font-semibold text-lg">{item.quantity}</span>

                <button
                  onClick={() => increment(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>

              <p className="mt-2">Price: ${item.price.toFixed(2)}</p>
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
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline font-semibold"
        >
          ⬅ Go Back
        </button>

        <button
          onClick={handleClear}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear Cart
        </button>

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
