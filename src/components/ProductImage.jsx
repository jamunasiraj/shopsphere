import React from "react";

const ProductImage = ({ product, compact = false }) => {
  const sizeClass = compact ? "w-40 md:w-56" : "w-80 md:w-96";
  return (
    <div className="flex justify-center">
      <img
        src={product.image}
        alt={product.title}
        className={`${sizeClass} rounded-xl shadow-lg object-contain`}
        style={{ maxHeight: compact ? 160 : 480 }}
      />
    </div>
  );
};

export default ProductImage;
