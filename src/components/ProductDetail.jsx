import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-10 text-2xl">Loading product...</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-10 text-2xl">Product Not Found</h2>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 md:w-96 rounded-xl shadow-lg"
        />
      </div>

      {/* Product Text */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <h2 className="text-3xl font-semibold mt-6 text-blue-600">
          ${product.price}
        </h2>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Productdetail;
