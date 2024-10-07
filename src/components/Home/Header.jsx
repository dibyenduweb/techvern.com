/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineShopping,
} from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/images/techvern.png";
import useAuth from "../../Hooks/useAuth";
import { FaComputer } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth(); // Destructure user and logout from the hook
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown state for mobile view
  const [profileDropdown, setProfileDropdown] = useState(false); // Manage profile dropdown state for logged-in users
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("You are logged out now"))
      .catch((error) => console.log(error));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false); // Close dropdown
      }
    };
    // Bind event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Mobile View: Hamburger, Logo, and Cart Icon */}
          <div className="flex md:hidden items-center justify-between w-full">
            <HiMenu
              size={24}
              className="text-gray-700 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <Link to="/">
              <img src={logo} alt="techvern" className="h-10 w-auto mx-auto" />
            </Link>
            <FiShoppingCart className="text-red-500" size={24} />
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="techvern" className="h-10 w-auto mr-4" />
              </Link>
            </div>

            {/* Search Input */}
            <div className="relative flex-grow mx-4">
              <input
                type="text"
                placeholder="Search for Products..."
                className="border border-gray-300 rounded-full px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <FiSearch
                className="absolute top-2 right-4 text-gray-500"
                size={20}
              />
            </div>

            {/* Right Section (Offer, Servicing, Account, Cart) */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2 justify-center bg-cyan-600 rounded-sm p-2">
                <AiOutlineShopping className="text-white" size={24} />
                <Link to="/offers">
                <span className="text-white font-semibold">Offers</span>

                </Link>
              </div>

              <div className="flex items-center gap-2 justify-center bg-red-500 rounded-sm p-2">
                <AiOutlineTool className="text-white" size={24} />
                <Link to="/serviceing">
                <span className="text-white font-semibold">Servicing</span>
                </Link>
              </div>

              {/* Profile or Login Button */}
              <div
                className="relative flex items-center gap-2"
                ref={dropdownRef}
              >
                <div className="flex items-center justify-center bg-red-500 rounded-full p-2">
                  <AiOutlineUser className="text-white" size={24} />
                </div>
                {user ? (
                  <div className="relative">
                    <span
                      className="cursor-pointer bg-emerald-500 px-1 rounded-md text-white"
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    >
                      {user.displayName}
                    </span>
                    {/* Dropdown for logged-in user */}
                    {profileDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                        <a
                          href="/my-cart"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          My Cart
                        </a>
                        <a
                          href="/wishlist"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Wishlist
                        </a>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="block bg-green-600 text-white px-4 py-2 rounded-md text-center font-semibold"
                  >
                    Log In
                  </a>
                )}
              </div>

              <a
                href="/pc-builder"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center text-xl"
              >
                <FaComputer className="mr-2 text-2xl" />
                PC Builder
              </a>

              <div className="relative">
                <FiShoppingCart className="text-red-500" size={24} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <AiOutlineShopping className="text-red-500" size={24} />
                <span className="text-gray-700">Offer</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineTool className="text-red-500" size={24} />
                <span className="text-gray-700">Servicing</span>
              </div>

              {/* Show login/logout for mobile */}
              <div className="flex items-center space-x-2">
                <AiOutlineUser
                  className="text-red-500 text-center mt-4"
                  size={24}
                />
                {user ? (
                  <div className="flex items-center space-x-2">
                    <span>{user.displayName}</span>
                    <button
                      onClick={handleLogOut}
                      className="block bg-green-600 text-white px-4 py-2 rounded-md text-center"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="block bg-green-600 text-white px-4 py-2 rounded-md text-center"
                  >
                    Sign in
                  </a>
                )}
              </div>

              <a
                href="/pc-builder"
                className="block bg-orange-500 text-white text-center px-4 py-2 rounded-full"
              >
                PC Builder
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
