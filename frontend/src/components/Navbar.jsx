import React from 'react';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex flex-wrap gap-6 bg-amber-50 px-4 py-2 border rounded-md shadow-md">
            {/** Home **/}
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    `flex items-center gap-x-2 text-sm md:text-base transition-all duration-200
                    ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700 hover:text-red-500 hover:scale-105"}`
                }
            >
                <MdHomeFilled className="text-lg" /> Home
            </NavLink>

            {/** Men's Section **/}
            <NavLink 
                to="/men" 
                className={({ isActive }) => 
                    `flex items-center gap-x-2 text-sm md:text-base transition-all duration-200
                    ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700 hover:text-red-500 hover:scale-105"}`
                }
            >
                <MdCategory className="text-lg" /> Men's
            </NavLink>

            {/** Women's Section **/}
            <NavLink 
                to="/women" 
                className={({ isActive }) => 
                    `flex items-center gap-x-2 text-sm md:text-base transition-all duration-200
                    ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700 hover:text-red-500 hover:scale-105"}`
                }
            >
                <MdShop2 className="text-lg" /> Women
            </NavLink>

            {/** Kids Section **/}
            <NavLink 
                to="/kids" 
                className={({ isActive }) => 
                    `flex items-center gap-x-2 text-sm md:text-base transition-all duration-200
                    ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700 hover:text-red-500 hover:scale-105"}`
                }
            >
                <MdContacts className="text-lg" /> Kids
            </NavLink>
        </nav>
    );
}

export default Navbar;
