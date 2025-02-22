import React from 'react';
import { MdStar } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white w-full py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
            PACTOS ERN_ECOM
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum tempore recusandae deleniti assumenda doloribus quia ratione, ut eos, veniam sit qui sint quaerat provident deserunt. Deleniti repudiandae molestiae soluta!
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          {/* Star Ratings */}
          <div className="flex items-center space-x-1 text-yellow-400 text-2xl">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar className="opacity-50" />
          </div>

          {/* Review Count */}
          <div className="text-2xl font-bold">
            176k <span className="font-light text-gray-400">Excellent Reviews</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <NavLink to="/" className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition">
              Shop Now
            </NavLink>
            <NavLink to="/offers" className="px-6 py-3 border border-yellow-500 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
              Offers
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
