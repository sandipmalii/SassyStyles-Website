import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Make sure Title is imported if it's a custom component
import ProductItem from './ProductItem'; // Make sure ProductItem is imported

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      let filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8'>
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image?.[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
