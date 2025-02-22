import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, name, image, old_price, new_price }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105">
      {/* Image Section */}
      <Link to={`/product/${id}`} className="block">
        <img src={image} alt={name} className="w-full h-52 object-cover rounded-lg" />
      </Link>

      

      {/* Product Info */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        
        {/* Pricing */}
        <div className="flex items-center space-x-3 mt-2">
          <span className="text-red-500 text-xl font-bold">${new_price.toFixed(2)}</span>
          <span className="text-gray-500 line-through">${old_price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
