// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title'; // Make sure this path is correct

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         if (cartItems[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: cartItems[items][item],
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems]);

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find((product) => product._id === item._id);

//           return (
//             <div key={index} className='py-4 border-t border-b border-gray-700 grid grid-cols-2 sm:grid-cols-2 gap-4'>
//               <div className='flex items-start gap-6'>
//                 <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                 <div>
//                   <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                   <div className='flex items-center gap-5 mt-2'>
//                     <p>${currency}{productData.price}</p>
//                     <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>Size: {item.size}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null: updateQuantity(item.size,Number(e.target.value)) }
//                   className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
//                   type="number"
//                   min={1}
//                   value={item.quantity}
//                   readOnly // remove this if you plan to update quantity
//                 />
//                 <img onClick={()=>updateQuantity(item._id, item.size, 0)}
//                 className='w-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="Delete" />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//     <div className='flex justify-end my-20'>
//   <div className='w-full sm:w-[450px]'>
//     <CartTotal/>
//     <div className='w-full text-end'>
//       <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//     </div>
//   </div>
// </div>


//     </div>
//   );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item) => {
          const productData = products.find((product) => product._id === item._id);

          if (!productData) return null;

          return (
            <div
              key={`${item._id}-${item.size}`}
              className='py-4 border-t border-b border-gray-700 grid grid-cols-2 sm:grid-cols-2 gap-4'
            >
              <div className='flex items-start gap-6'>
                <img
                  className='w-16 sm:w-20'
                  src={productData.image?.[0] || ''}
                  alt={productData.name}
                />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>Size: {item.size}</p>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <input
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || val === '0') return;
                    updateQuantity(item._id, item.size, Number(val));
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type='number'
                  min={1}
                  value={item.quantity}
                  // Removed readOnly to allow changes
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt='Delete'
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          {/* Assuming CartTotal component exists */}
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm my-8 px-8 py-3'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
