// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'; // Assuming this path is correct
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {
//   const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname.includes('collection')) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   }, [location, showSearch]); 




//     return showSearch && visible ? (
//         <div className='border-t border-b bg-gray-50 text-center'>
//             <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//                 <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
//                 <img className='w-4' src={assets.search_icon} alt="" />
//             </div>
//             <img onClick={()=>setShowSearch(false)} className="in-line w-3 crsor-pointer" src={assets.cross_icon} alt=""/>

//         </div>
//     ) : null

// }

// export default SearchBar


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // Ensure the path is correct
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the search bar only on 'collection' route
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search" />
      </div>

      {/* Fixes typo: "crsor-pointer" → "cursor-pointer", "in-line" → "inline" */}
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
