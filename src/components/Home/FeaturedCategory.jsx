/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaDesktop,
  FaVideo,
  FaMemory,
  FaHdd,
  FaFan,
  FaKeyboard,
  FaMouse,
  FaHeadphones,
  FaChair,
  FaMobileAlt,
  FaGamepad,
  FaPlug,
  FaCogs,
  FaMicrochip,
} from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";

const FeaturedCategory = () => {
  const categories = [
    { name: "Desktop", icon: FaDesktop },
    { name: "Motherboard", icon: FaMicrochip },
    { name: "Graphics Card", icon: FaVideo },
    { name: "Memory", icon: FaMemory },
    { name: "Storage", icon: FaHdd },
    { name: "CPU Cooler", icon: FaFan },
    { name: "Case", icon: FaCogs },
    { name: "Power Supply", icon: FaPlug },
    { name: "Keyboard", icon: FaKeyboard },
    { name: "Mouse", icon: FaMouse },
    { name: "Headphones", icon: FaHeadphones },
    { name: "Gaming Chair", icon: FaChair },
    { name: "Printer", icon: FiPrinter },
    { name: "Gadget", icon: FaMobileAlt },
    { name: "Gaming", icon: FaGamepad },
    { name: "Cables", icon: FaCogs },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-4xl font-semibold p-2">
        Featured Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-slate-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-4 flex flex-col items-center"
          >
            <div className="mb-2">
              <category.icon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
