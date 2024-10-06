/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const apiUrl = '/computers.json'; // Path to your local JSON file

//   // Fetch products from API on component mount
//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => setProducts(data.computers))  // Access the computers array
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   // If no products, show a loading message or empty message
//   if (!products.length) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-center text-4xl font-semibold p-2">Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//         {products.map((product) => {
//           const discountPercentage = Math.round(
//             ((product.offPrice - product.price) / product.offPrice) * 100
//           );

//           return (
//             <div key={product.id} className="relative max-w-xs mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
//               <div className="absolute bg-red-600 text-white px-2 py-1 rounded-full right-2 top-2 text-xs font-bold">
//                 -{discountPercentage}%
//               </div>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
//                 <div className="mt-2">
//                   <span className="text-red-500 font-bold text-xl">₹ {product.price}</span>
//                   <span className="line-through text-gray-500 ml-2">₹ {product.offPrice}</span>
//                 </div>
//                 <button className="mt-4 w-full bg-red-600 text-white font-semibold py-2 rounded-md flex justify-center items-center hover:bg-red-700 transition duration-300">
//                   <FaShoppingCart className="mr-2" />
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = '/computers.json'; // Path to your local JSON file

  // Fetch products from API on component mount
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data.computers))  // Access the computers array
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // If no products, show a loading message or empty message
  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2 className="text-center text-4xl font-semibold p-2">Products</h2>
      {/* Updated grid layout to show 5 products per row on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
        {products.map((product) => {
          const discountPercentage = Math.round(
            ((product.offPrice - product.price) / product.offPrice) * 100
          );

          return (
            <div key={product.id} className="relative max-w-xs mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
              <div className="absolute bg-red-600 text-white px-2 py-1 rounded-full right-2 top-2 text-xs font-bold">
                -{discountPercentage}%
              </div>
              {/* Ensure the image fills the container while maintaining aspect ratio */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-contain"  // Updated to object-contain for full image
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                <div className="mt-2">
                  <span className="text-red-500 font-bold text-xl">₹ {product.price}</span>
                  <span className="line-through text-gray-500 ml-2">₹ {product.offPrice}</span>
                </div>
                <button className="mt-4 w-full bg-red-600 text-white font-semibold py-2 rounded-md flex justify-center items-center hover:bg-red-700 transition duration-300">
                  <FaShoppingCart className="mr-2" />
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
