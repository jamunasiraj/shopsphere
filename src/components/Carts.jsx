import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cart";

const Carts = () => {
  // Load initial cart from localStorage (fallback to some items or empty array)
  const loadCart = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return []; // no saved cart
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Failed to parse cart from localStorage:", err);
      return [];
    }
  };

  const [cartItems, setCartItems] = useState(loadCart);

  // persist cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error("Failed to save cart to localStorage:", err);
    }
  }, [cartItems]);

  // Helpers
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    if (!window.confirm("Clear entire cart?")) return;
    setCartItems([]);
  };

  const updateQuantity = (id, nextQty) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, nextQty) } : item
        )
        // keep only items with positive quantity (shouldn't be necessary due to Math.max)
        .filter((it) => it.quantity > 0)
    );
  };

  const increment = (id) => {
    const item = cartItems.find((c) => c.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decrement = (id) => {
    const item = cartItems.find((c) => c.id === id);
    if (item) updateQuantity(id, Math.max(1, item.quantity - 1));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  // Empty state
  if (!cartItems || cartItems.length === 0)
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="text-sm px-3 py-1 border rounded hover:bg-red-50 text-red-600"
          >
            Clear Cart
          </button>
          <Link
            to="/shop"
            className="text-blue-600 underline hover:text-blue-800 text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

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
              <p className="text-sm text-gray-600">
                Price: ${Number(item.price).toFixed(2)}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                  aria-label={`Decrease quantity of ${item.title}`}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!Number.isNaN(v))
                      updateQuantity(item.id, Math.max(1, v));
                  }}
                  className="w-16 text-center border rounded px-2 py-1"
                />
                <button
                  onClick={() => increment(item.id)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                  aria-label={`Increase quantity of ${item.title}`}
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-800 text-sm mt-2"
              >
                Remove
              </button>
            </div>
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
