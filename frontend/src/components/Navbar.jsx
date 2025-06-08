import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium'>
        {/* Logo */}
      <Link to='/'>  <img src={assets.logo} className='w-36' alt="Logo" /> </Link>

        {/* Navigation Links (Desktop) */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <li>
            <NavLink to='/home' className='flex flex-col items-center gap-1'>
              <p>HOME</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
              <p>COLLECTION</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <p>ABOUT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <p>CONTACT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

          <div className="group relative">
            <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
            <div className="hidden group-hover:block absolute right-0 top-full pt-2 z-10">
              <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-700 rounded shadow-md">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 z-20 ${visible ? 'w-64 px-3 py-4' : 'w-0 overflow-hidden'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/collection"
          >
            Collection
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
