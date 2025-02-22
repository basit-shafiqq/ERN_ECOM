import React from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function ProductHd({ product }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 text-sm bg-gray-100 p-3 rounded-lg">
      <Link to="/" className="hover:text-blue-500">Shop</Link> 
      <TbArrowRight className="text-gray-500" />
      
      <Link to={`/category/${product.category}`} className="hover:text-blue-500 capitalize">
        {product.category}
      </Link> 
      <TbArrowRight className="text-gray-500" />

      <span className="text-gray-900 font-medium">{product.name}</span>
    </div>
  );
}

export default ProductHd;
