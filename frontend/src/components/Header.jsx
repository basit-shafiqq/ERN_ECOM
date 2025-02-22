import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, LogOut, LogIn } from 'lucide-react';
import logo from "../assets/logo.png";
import Navbar from './Navbar';
import { ShopContext } from '../Context/ShopContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false; // Replace with actual authentication logic

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className='fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10 border-amber-50'>
      <div className='px-4 flex justify-between py-3 items-center max-xs:px-2'>

        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" height={88} width={88} />
        </NavLink>

        {/* Desktop Navbar */}
        <div className='hidden md:flex'>
          <Navbar />
        </div>

        {/* Cart & Auth Buttons (Desktop) */}
        <div className='hidden md:flex items-center space-x-4'>
          {/* Cart Icon */}
          <NavLink to="/cart-page" className="relative">
            <ShoppingCart size={26} className="text-gray-700 hover:text-black transition" />
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getTotalCartItems()}
              </span>
            )}
          </NavLink>

          {/* Authentication Buttons */}
          {isAuthenticated ? (
            <NavLink to="/logout" className="flex items-center text-gray-700 hover:text-black transition">
              <LogOut size={24} className="mr-1" />
              <span>Logout</span>
            </NavLink>
          ) : (
            <NavLink to="/login" className="flex items-center text-gray-700 hover:text-black transition">
              <LogIn size={24} className="mr-1" />
              <span>Login</span>
            </NavLink>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full flex flex-col space-y-4 items-center'>
          <Navbar />

          {/* Cart Icon (Mobile) */}
          <NavLink to="/cart-page" className="relative">
            <ShoppingCart size={26} className="text-gray-700 hover:text-black transition" />
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getTotalCartItems()}
              </span>
            )}
          </NavLink>

          {/* Authentication Buttons (Mobile) */}
          {isAuthenticated ? (
            <NavLink to="/logout" className="flex items-center text-gray-700 hover:text-black transition">
              <LogOut size={24} className="mr-1" />
              <span>Logout</span>
            </NavLink>
          ) : (
            <NavLink to="/login" className="flex items-center text-gray-700 hover:text-black transition">
              <LogIn size={24} className="mr-1" />
              <span>Login</span>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
