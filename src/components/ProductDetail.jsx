import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
const Productdetail = ({ product: productProp = null, compact = false }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(productProp);
  const [loading, setLoading] = useState(!productProp);

  useEffect(() => {
    if (productProp) {
      setProduct(productProp);
      setLoading(false);
      return;
    }
    if (!id) return;

    let cancel = false;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        if (!cancel) setProduct(data);
      } catch (err) {
        if (!cancel) setProduct(null);
        console.error(err);
      } finally {
        if (!cancel) setLoading(false);
      }
    };
    fetchProduct();
    return () => (cancel = true);
  }, [id, productProp]);

  if (loading)
    return <h2 className="text-center mt-10 text-2xl">Loading product...</h2>;
  if (!product)
    return <h2 className="text-center mt-10 text-2xl">Product Not Found</h2>;

  if (compact) {
    return (
      <article className="border rounded-lg p-4 shadow-sm flex gap-4 items-start hover:shadow-lg transition">
        <ProductImage product={product} compact />
        <div className="flex-1">
          <ProductInfo product={product} compact />
        </div>
      </article>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </section>
  );
};

export default Productdetail;
