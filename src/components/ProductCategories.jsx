import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productcategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err.message || "Error fetching categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading categories...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Product Categories
      </h1>

      {/* This is the categories list page, so no back link here */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/categories/${category}`}
            className="block border rounded-lg p-6 text-center bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="capitalize text-xl font-semibold text-gray-800">
              {category}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Productcategories;
