import React, { useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div className="text-center text-red-500 font-bold">Product not found</div>;
  }

  return (
    <section className="p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">

        {/* Left Side - Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {[product_rt_1, product_rt_2, product_rt_3, product_rt_4].map((img, index) => (
              <img key={index} src={img} alt="Product Thumbnail" className="w-20 h-20 rounded-lg border" />
            ))}
          </div>
          <div>
            <img src={product?.image} alt="Main Product" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800">{product?.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 my-2">
            {Array(4).fill().map((_, i) => (
              <MdStar key={i} className="text-xl" />
            ))}
            <p className="text-gray-600">(111)</p>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 text-lg">
            <span className="text-gray-500 line-through">${product?.old_price}</span>
            <span className="text-red-500 font-bold text-xl">${product?.new_price}</span>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <h4 className="text-gray-700 font-semibold">Select Size:</h4>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L"].map((size) => (
                <div key={size} className="border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">{size}</div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button 
              onClick={() => addToCart?.(product?.id)} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Buy Now
            </button>
          </div>

          {/* Category & Tags */}
          <p className="text-gray-700 mt-4">Category: <span className="text-gray-900 font-medium">Women | Jacket | Winter</span></p>
          <p className="text-gray-700">Tags: <span className="text-gray-900 font-medium">Modern | Latest</span></p>
        </div>
      </div>
    </section>
  );
}

export default ProductDisplay;
