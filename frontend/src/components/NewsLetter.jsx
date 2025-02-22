import React from "react";

function NewsLetter() {
  return (
    <section className="bg-gray-100 py-10 px-6 flex flex-col items-center justify-center">
      <div className="max-w-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800">📬 Stay Updated!</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to our newsletter and never miss out on amazing deals!
        </p>
      </div>

      <form className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsLetter;
