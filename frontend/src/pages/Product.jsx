// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import RelatedProducts from '../components/RelatedProducts'; 
// import { assets } from '../assets/assets'; 

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');

//   const fetchProductData = () => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image[0]);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/* Product Section */}
//       <div className='flex gap-12 flex-col sm:flex-row'>
//         {/* Product Images */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {productData.image?.map((item, index) => (
//               <img
//                 key={index}
//                 onClick={() => setImage(item)}
//                 src={item}
//                 alt=""
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt={productData.name} />
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className='flex-1 mt-4'>
//         <h1 className='font-medium text-2xl'>{productData.name}</h1>
//         <div className='flex items-center gap-1 mt-2'>
//           <img src={assets.star_icon} alt="" className="w-3.5" />
//           <img src={assets.star_icon} alt="" className="w-3.5" />
//           <img src={assets.star_icon} alt="" className="w-3.5" />
//           <img src={assets.star_icon} alt="" className="w-3.5" />
//           <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//           <p className='pl-2'>(122)</p>
//         </div>
//         <p className='mt-5 text-3xl font-medium'>${currency}{productData.price}</p>
//         <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

//         {/* Sizes */}
//         <div className='flex flex-col gap-4 my-8'>
//           <p>Select Size</p>
//           <div className='flex gap-2'>
//             {productData.sizes?.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSize(item)}
//                 className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button onClick={()=>addToCart(productData.id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//         <hr className='mt-8 sm:w-4/5' />
//         <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//           <p>100% Original product.</p>
//           <p>Cash on delivery is available on this product.</p>
//           <p>Easy return and exchange policy within 7 days.</p>
//         </div>
//       </div>

//       {/* Description & Reviews */}
//       <div className='mt-20'>
//         <div className='flex'>
//           <b className='border px-5 py-3 text-sm'>Description</b>
//           <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
//         </div>
//         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
//           <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet.</p>
//           <p>They often include features like shopping carts, secure payment gateways, and order tracking to enhance the overall shopping experience.</p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts
//         category={productData.category}
//         subCategory={productData.subCategory}
//       />
//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts'; 
import { assets } from '../assets/assets'; 

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
      setSize(found.sizes ? found.sizes[0] : '');
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size before adding to cart');
      return;
    }
    addToCart(productData._id, size);
  };

  if (!productData) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Section */}
      <div className='flex gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt={`${productData.name} - image ${index + 1}`}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt={productData.name} />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className='flex-1 mt-4'>
        <h1 className='font-medium text-2xl'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="star" className="w-3.5" />
          <img src={assets.star_icon} alt="star" className="w-3.5" />
          <img src={assets.star_icon} alt="star" className="w-3.5" />
          <img src={assets.star_icon} alt="star" className="w-3.5" />
          <img src={assets.star_dull_icon} alt="star dull" className="w-3.5" />
          <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        {/* Sizes */}
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {productData.sizes?.map((item, index) => (
              <button
                key={index}
                onClick={() => setSize(item)}
                className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ${!size ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!size}
        >
          ADD TO CART
        </button>
        <hr className='mt-8 sm:w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet.</p>
          <p>They often include features like shopping carts, secure payment gateways, and order tracking to enhance the overall shopping experience.</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
