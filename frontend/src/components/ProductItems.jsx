// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//       <div className='overflow-hidden rounded'>
//         <img
//           className='hover:scale-110 transition-transform duration-300 ease-in-out w-full object-cover'
//           src={image}
//           alt={name}
//         />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className='text-sm font-medium'>
//         {currency}{price}
//       </p>
//     </Link>
//   );
// };

// export default ProductItem;

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden rounded'>
        <img
          className='hover:scale-110 transition-transform duration-300 ease-in-out w-full object-cover'
          src={image}
          alt={name || "Product Image"}
          loading="lazy"
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;

