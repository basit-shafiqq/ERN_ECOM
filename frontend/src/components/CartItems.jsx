import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

function CartItems() {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);

  return (
    <section className="p-6 max-w-5xl mx-auto mt-20">
      {isCartEmpty ? (
        <p className="text-center text-gray-500 text-lg">🛒 Your cart is empty</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Cart Table */}
          <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-lg">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr className="text-left text-gray-700">
                <th className="p-4">Product</th>
                <th className="p-4">Title</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4 text-center">Remove</th>
              </tr>
            </thead>

            <tbody>
              {all_products.map((e) => {
                if (cartItems[e.id] && cartItems[e.id] > 0) {
                  return (
                    <tr key={e.id} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                      </td>
                      <td className="p-4 font-medium">{e.name}</td>
                      <td className="p-4 text-gray-700">${e.new_price}</td>
                      <td className="p-4 text-center">{cartItems[e.id]}</td>
                      <td className="p-4 font-semibold text-green-600">
                        ${e.new_price * cartItems[e.id]}
                      </td>
                      <td className="p-4 text-center">
                        <TbTrash
                          onClick={() => removeFromCart(e.id)}
                          className="text-red-500 cursor-pointer text-xl hover:text-red-700 transition duration-200"
                        />
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {/* Summary Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cart Summary */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg">
              <h4 className="text-xl font-bold mb-4">Summary</h4>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <h4>Subtotal:</h4>
                  <h4>${getTotalCartAmount().toFixed(2)}</h4>
                </div>
                <hr />
                <div className="flex justify-between text-gray-700">
                  <h4>Shipping Fee:</h4>
                  <h4 className="text-green-600 font-medium">Free</h4>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <h4>Total:</h4>
                  <h4>${getTotalCartAmount().toFixed(2)}</h4>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Checkout
                </button>
              </div>
            </div>

            {/* Coupon Section */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg">
              <h4 className="text-xl font-bold mb-4">Apply Coupon</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-l-md"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-900 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartItems;
