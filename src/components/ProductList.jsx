import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();

  // Parse search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = category
          ? `https://fakestoreapi.com/products/category/${encodeURIComponent(
              category
            )}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Filter products client-side by searchQuery
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
  );

  if (loading) {
    return <h2 className="text-center mt-10 text-2xl">Loading Products...</h2>;
  }

  if (filteredProducts.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-xl">No products found.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Show Back to Categories only if category is selected */}
      {category && (
        <div className="mb-6">
          <Link
            to="/categories"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Back to Categories
          </Link>
        </div>
      )}

      <h1 className="text-4xl font-bold text-center mb-10">
        {category ? `Category: ${category}` : "Our Products"}
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">${product.price}</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
