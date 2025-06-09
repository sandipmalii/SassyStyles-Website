// import React, { useContext, useState, useEffect } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from '../components/ProductItems';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext); 
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]); // Added dependency on products

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item.id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;

import React, { useContext, useState, useEffect } from 'react'; 
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from '../components/ProductItems';  // Confirm filename and path

const LatestCollection = () => {
  const { products } = useContext(ShopContext); 
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item.id ?? index}    // fallback to index if id undefined
            id={item.id ?? item._id}  // fallback to _id if id undefined
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
