import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Productdetail from "./Productdetail";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch product list once after mount
  useEffect(() => {
    let cancel = false;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (!cancel) setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        if (!cancel) setLoading(false);
      }
    };
    fetchProducts();
    return () => (cancel = true);
  }, []);

  if (loading)
    return <h2 className="text-center mt-10 text-2xl">Loading products...</h2>;
  if (!products.length)
    return <h2 className="text-center mt-10 text-2xl">No products found</h2>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/shop/${product.id}`}
            className="no-underline"
          >
            <Productdetail product={product} compact />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
