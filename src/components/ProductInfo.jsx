import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product, compact = false }) => {
  const navigate = useNavigate();

  // SAVE PRODUCT TO LOCAL STORAGE
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`Added to Cart: ${product.title}`);

    navigate("/cart");
  };

  return (
    <div>
      <h1
        className={`font-bold ${
          compact ? "text-lg" : "text-3xl"
        } text-gray-900`}
      >
        {product.title}
      </h1>

      <p
        className={`mt-2 text-gray-700 ${
          compact ? "text-sm" : "leading-relaxed"
        }`}
      >
        {compact
          ? product.description.slice(0, 120) +
            (product.description.length > 120 ? "…" : "")
          : product.description}
      </p>

      <h2
        className={`${
          compact ? "text-xl" : "text-3xl"
        } font-semibold mt-4 text-blue-600`}
      >
        ${product.price}
      </h2>

      {/* ADD TO CART BUTTON */}
      <button
        className={`mt-4 ${
          compact ? "px-4 py-2" : "px-6 py-3"
        } bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition`}
        onClick={addToCart}
      >
        Add to Cart
      </button>

      {/* GO BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className={`${
          compact ? "px-4 py-2" : "px-6 py-3"
        } bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition ml-2`}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductInfo;
