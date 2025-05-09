import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border py-1 px-2 min-w-[9rem] rounded-sm space-y-2 border-zinc-700">
      <h1 className="text-lg text-gray-600">{product.company}</h1>
      <p className="text-sm text-gray-600">{product.category}</p>
    </div>
  );
};

export default ProductCard;
