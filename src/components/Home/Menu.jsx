/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <div className="bg-black text-white text-xl">
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-4 p-4">
      <Link
              to={"/"}
              className="bg-red-500 px-2 rounded-lg hover:text-white transition-colors"
            >
            <li>Home</li>
            </Link>
        {[
          "Desktop",
          "Components",
          "Laptop",
          "Monitor",
          "Security",
          "Accessories",
          "Office Equipments",
          "Networking",
          "Software",
          "Gaming",
        ].map((item, index) => (
          <li key={index}>

            <Link
              to={`#${item.toLowerCase()}`} // Use Link for navigation
              className="hover:text-red-400 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="bg-black text-white text-xl md:hidden">
        <button onClick={toggleMobileMenu} className="p-4 focus:outline-none">
          {isMobileMenuOpen ? "✖" : "☰"} Menu
        </button>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col p-4 bg-gray-800">
            {[
              "Desktop",
              "Components",
              "Laptop",
              "Monitor",
              "Security",
              "Accessories",
              "Office Equipments",
              "Networking",
              "Software",
              "Gaming",
            ].map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-700">
                <Link
                  to={`/${item.toLowerCase()}`} // Use Link for navigation
                  className="hover:text-gray-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
