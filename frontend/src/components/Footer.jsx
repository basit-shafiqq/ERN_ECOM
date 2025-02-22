import { Link } from 'react-router-dom';
import React from 'react';
import { FOOTER_LINKS, SOCIALS } from '../assets/data'; // Import socials too

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & Brand Section */}
        <div>
          <Link to="/" className="text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition">
            PACTOS
          </Link>
          <p className="text-gray-400 mt-3 text-sm">
            Your one-stop online shopping destination. Get the best deals now!
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-gray-300 hover:text-yellow-400 transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-400">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {SOCIALS.links.map((icon, index) => (
              <a href="/" key={index} className="hover:scale-110 transition-transform">
                <img src={icon} alt="social icon" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} PACTOS. All rights reserved.
      </div>
    </footer>
  );
}

// Footer Column Component
const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-3 text-yellow-400">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
