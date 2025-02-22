import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import Item from "../components/Item";

function Category({ category, banner }) {
  return (
    <section className="px-6 py-10">
      {/* Banner */}
      <div className="w-full mb-6">
        <img src={banner} alt="Category Banner" className="w-full rounded-lg shadow-md" />
      </div>

      {/* Sort & Filter */}
      <div className="flex justify-between items-center mb-6">
        <h5 className="text-gray-700">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </h5>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer">
          <span>Sort by</span> <MdOutlineKeyboardArrowDown className="text-lg" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all_products
          .filter((item) => !category || item.category === category) // ✅ Filter correctly
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Load More
        </button>
      </div>
    </section>
  );
}

export default Category;
