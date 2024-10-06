// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <p className="mb-2">About Us</p>
            <p className="mb-2">Careers</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Terms of Service</p>
          </div>
          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Shop</h4>
            <p className="mb-2">Products</p>
            <p className="mb-2">Categories</p>
            <p className="mb-2">New Arrivals</p>
            <p className="mb-2">Best Sellers</p>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="mb-2">Email: support@example.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Address: 123 E-commerce St, City, Country</p>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center mt-6">
          <a href="#" className="mx-2">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="#" className="mx-2">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="mx-2">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="mx-2">
            <FaLinkedinIn className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
