import React from 'react';

function Offer() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold">🔥 Summer Sale 50% 🔥</h2>
        <h3 className="text-lg md:text-xl font-semibold">
          Men's Leather Formal Wear Shoes
        </h3>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
          Go to Store →
        </button>
      </div>
    </section>
  );
}

export default Offer;
