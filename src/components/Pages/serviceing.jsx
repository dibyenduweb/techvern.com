/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Serviceing = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            <h1 className="text-4xl font-bold mb-5">Computer Servicing</h1>
            <h2 className="text-lg font-semibold mb-5">Trusted by 2000+ Customers</h2>

            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Book a Free Service</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-lg p-2 mb-3 w-full"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-lg p-2 mb-3 w-full"
                />
                <input
                    type="text"
                    placeholder="Your Address"
                    className="border border-gray-300 rounded-lg p-2 mb-3 w-full"
                />
                <button className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600">
                    Book Now
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mt-5 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Book a Service at Your Home</h3>
                <p className="mb-3">We offer low-cost home service options!</p>
                <button className="bg-green-500 text-white rounded-lg p-2 w-full hover:bg-green-600">
                    Book Home Service
                </button>
            </div>

            <div className="mt-10 text-center">
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="flex items-center justify-center">
                    <FaPhoneAlt className="mr-2" /> (123) 456-7890
                </p>
                <p className="flex items-center justify-center">
                    <FaEnvelope className="mr-2" /> info@computerservice.com
                </p>
            </div>
        </div>
    );
};

export default Serviceing;
