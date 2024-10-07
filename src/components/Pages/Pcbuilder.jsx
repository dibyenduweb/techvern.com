/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
import jsPDF from 'jspdf';
import logo from '../../assets/images/techvern.png'

const components = {
  core: [
    { name: 'Processor', options: [{ name: 'i5', price: 20000 }, { name: 'i7', price: 30000 }] },
    { name: 'CPU Cooler', options: [{ name: 'Stock', price: 5000 }, { name: 'Aftermarket', price: 10000 }] },
    { name: 'Motherboard', options: [{ name: 'ATX', price: 15000 }, { name: 'Micro ATX', price: 12000 }] },
    { name: 'RAM', options: [{ name: '8GB', price: 8000 }, { name: '16GB', price: 15000 }, { name: '32GB', price: 28000 }] },
    { name: 'HDD', options: [{ name: '1TB', price: 5000 }, { name: '2TB', price: 8000 }] },
    { name: 'SSD', options: [{ name: '256GB', price: 4000 }, { name: '512GB', price: 8000 }, { name: '1TB', price: 15000 }] },
    { name: 'Graphics Card', options: [{ name: 'GTX 1650', price: 20000 }, { name: 'RTX 3060', price: 50000 }] },
    { name: 'Power Supply', options: [{ name: '450W', price: 4000 }, { name: '600W', price: 6000 }] },
    { name: 'Casing', options: [{ name: 'Mid Tower', price: 4000 }, { name: 'Full Tower', price: 7000 }] },
  ],
  peripherals: [
    { name: 'Monitor', options: [{ name: '24 inch', price: 15000 }, { name: '27 inch', price: 20000 }] },
    { name: 'Keyboard', options: [{ name: 'Mechanical', price: 5000 }, { name: 'Membrane', price: 2000 }] },
    { name: 'Mouse', options: [{ name: 'Wired', price: 1000 }, { name: 'Wireless', price: 2000 }] },
    { name: 'Headphone', options: [{ name: 'Over-ear', price: 3000 }, { name: 'In-ear', price: 1500 }] },
    { name: 'Speaker', options: [{ name: '2.1 Channel', price: 5000 }, { name: '5.1 Channel', price: 10000 }] },
    { name: 'UPS', options: [{ name: '600VA', price: 8000 }, { name: '1000VA', price: 12000 }] },
  ],
};

const Modal = ({ isOpen, onClose, components, totalPrice, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
        <img className='w-24' src={logo} alt="logo" />
        <h2 className="text-xl font-semibold mb-4">Selected Components</h2>
        <ul className="list-disc list-inside mb-4">
          {Object.entries(components).flatMap(([category, items]) =>
            Object.entries(items).map(([componentName, option]) => (
              <li key={option.name}>
                {componentName}: {option.name} - ₹{option.price}
              </li>
            ))
          )}
        </ul>
        <h3 className="font-semibold">Total Price: ₹{totalPrice}</h3>
        <div className="mt-4 flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Close</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={onDownload}>Download as PDF</button>
        </div>
      </div>
    </div>
  );
};

const Pcbuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState({ core: {}, peripherals: {} });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComponentChange = (category, componentName, option) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [componentName]: option,
      },
    }));

    calculateTotalPrice({ ...selectedComponents, [category]: { ...selectedComponents[category], [componentName]: option } });
  };

  const calculateTotalPrice = (components) => {
    const total = Object.values(components).flatMap(category => Object.values(category))
      .reduce((acc, component) => acc + (component.price || 0), 0);
    setTotalPrice(total);
  };

  const removeComponent = (category, componentName) => {
    const updatedComponents = { ...selectedComponents };
    delete updatedComponents[category][componentName];
    setSelectedComponents(updatedComponents);
    calculateTotalPrice(updatedComponents);
  };

  const resetSelections = () => {
    setSelectedComponents({ core: {}, peripherals: {} });
    setTotalPrice(0);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Selected Components", 10, 10);
    let y = 20;
    Object.entries(selectedComponents).flatMap(([category, items]) =>
      Object.entries(items).map(([componentName, option]) => {
        doc.text(`${componentName}: ${option.name} - ₹${option.price}`, 10, y);
        y += 10;
      })
    );
    doc.text(`Total Price: ₹${totalPrice}`, 10, y);
    doc.save("PC_Build.pdf");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Build Your Own PC</h1>

      <h2 className="text-2xl font-semibold mb-4">Core Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {components.core.map((component) => (
          <div key={component.name} className="bg-white text-black p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <h3 className="font-semibold">{component.name}</h3>
            <select
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedComponents.core[component.name]?.name || ''}
              onChange={(e) => {
                const selectedOption = component.options.find(option => option.name === e.target.value);
                handleComponentChange('core', component.name, selectedOption);
              }}
            >
              <option value="" disabled>Select an option</option>
              {component.options.map(option => (
                <option key={option.name} value={option.name}>
                  {option.name} - ₹{option.price}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Peripherals & Others</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {components.peripherals.map((component) => (
          <div key={component.name} className="bg-white text-black p-4 rounded-lg shadow-md transition transform hover:scale-105">
            <h3 className="font-semibold">{component.name}</h3>
            <select
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedComponents.peripherals[component.name]?.name || ''}
              onChange={(e) => {
                const selectedOption = component.options.find(option => option.name === e.target.value);
                handleComponentChange('peripherals', component.name, selectedOption);
              }}
            >
              <option value="" disabled>Select an option</option>
              {component.options.map(option => (
                <option key={option.name} value={option.name}>
                  {option.name} - ₹{option.price}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-6 w-full bg-zinc-700 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Selected Components</h2>
        <ul className="list-disc list-inside">
          {Object.entries(selectedComponents).flatMap(([category, components]) =>
            Object.entries(components).map(([componentName, option]) => (
              <li key={option.name} className="flex items-center mt-4">
                {componentName}: {option.name} - ₹{option.price}
                <button
                  className="flex justify-center items-center ml-4 text-white px-2 rounded-md bg-red-500 hover:bg-red-600 transition"
                  onClick={() => removeComponent(category, componentName)}
                >
                  <FaTimes className="mr-1" /> Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mt-4 text-">
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Build
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600 transition"
          onClick={resetSelections}
        >
          <FaTrash className="mr-2" /> Reset
        </button>
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        components={selectedComponents}
        totalPrice={totalPrice}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default Pcbuilder;
