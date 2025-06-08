import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem'; // Ensure this path is correct
import { assets } from '../assets/assets'; // Assuming dropdown icon is here

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter(); // fallback to filtered only
        return;
    }

    setFilterProducts(fpCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t px-4">
      {/* FILTERS SECTION */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className="flex gap-2 items-center">
                <input className="w-3" type="checkbox" value={cat} onChange={toggleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
              <label key={sub} className="flex gap-2 items-center">
                <input className="w-3" type="checkbox" value={sub} onChange={toggleSubCategory} />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS & SORT */}
      <div className="flex-1">
        <div className="mb-4 text-right">
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 py-1"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
