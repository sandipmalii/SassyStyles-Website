// import React from 'react';
// import { assets } from '../assets/assets';

// const Footer = () => {
//   return (
//     <div className="px-4 sm:px-10">
//       {/* Main Footer Grid */}
//       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
//         {/* Logo and Description */}
//         <div>
//           <img src={assets.logo} className="mb-5 w-32" alt="Forever logo" />
//           <p className="w-full md:w-2/3 text-gray-600">
//             Forever is your go-to destination for stylish, high-quality fashion and lifestyle products. We’re committed to delivering comfort, design, and value — all in one place.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <p className="text-xl font-medium mb-5">COMPANY</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Delivery Information</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Support Links */}
//         <div>
//           <p className="text-xl font-medium mb-5">SUPPORT</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>FAQ</li>
//             <li>Help Center</li>
//             <li>Returns & Refunds</li>
//             <li>Terms of Service</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>+1-212-456-7890</li>
//             <li>support@foreveryou.com</li>
//             <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom Line */}
//       <hr />
//       <p className="py-5 text-sm text-center text-gray-500">
//         &copy; 2024 Forever.com – All Rights Reserved
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-4 sm:px-10">
      {/* Main Footer Grid */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Forever logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is your go-to destination for stylish, high-quality fashion and lifestyle products. We’re committed to delivering comfort, design, and value — all in one place.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/delivery-info" className="hover:underline">Delivery Information</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <p className="text-xl font-medium mb-5">SUPPORT</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/help-center" className="hover:underline">Help Center</a></li>
            <li><a href="/returns-refunds" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li><a href="mailto:support@foreveryou.com" className="hover:underline">support@foreveryou.com</a></li>
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <hr />
      <p className="py-5 text-sm text-center text-gray-500">
        &copy; 2024 Forever.com – All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
