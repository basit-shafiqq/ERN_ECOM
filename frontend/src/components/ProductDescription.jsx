import React, { useState } from 'react';

function ProductDescription() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded-lg shadow-md bg-white">
      {/* Tabs Section */}
      <div className="flex justify-between border-b mb-4">
        {["description", "care-guide", "size-guide"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 w-1/3 text-center font-semibold ${
              activeTab === tab ? "border-b-2 border-black text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="text-gray-700">
        {activeTab === "description" && (
          <p>
            This premium product is crafted with high-quality materials to provide ultimate comfort and durability. Perfect for all occasions.
          </p>
        )}
        {activeTab === "care-guide" && (
          <p>
            To maintain the quality of your product, wash in cold water, avoid bleach, and air dry for long-lasting use.
          </p>
        )}
        {activeTab === "size-guide" && (
          <p>
            Sizes available: S, M, L, XL. Refer to our size chart for exact measurements.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;
