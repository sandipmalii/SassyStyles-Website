// import React, { useState, useContext } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal'; 
// import { assets } from '../assets/assets'; 
// import { ShopContext } from '../context/ShopContext';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const { navigate } = useContext(ShopContext);

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

//       {/* ----------- Left Side ----------- */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         <div className='flex gap-3'>
//           <input type="text" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input type="text" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>

//         <div className='flex gap-3'>
//           <input type="email" placeholder="Email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>

//         <div className='flex gap-3'>
//           <input type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//           <input type="text" placeholder="Postal Code" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
//         </div>

//         <div className='flex gap-3'>
//           <input type="number" placeholder="Phone Number" className="p-3 border border-gray-300 rounded-md w-full" />
//           <input type="text" placeholder="Country" className="p-3 border border-gray-300 rounded-md w-full" />
//         </div>
//       </div>

//       {/* ----------- Right Side ----------- */}
//       <div className='mt-8'>

//         <div className='mt-12'>
//           <CartTotal />
//         </div>

//         <div className="mt-12">
//           <Title text1={'PAYMENT'} text2={'METHOD'} />

//           {/* ----------- Payment Method Selection ----------- */}
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
//             </div>

//             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>
//               PLACE ORDER
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    country: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Basic validation example
    if (!form.firstName || !form.email || !form.street) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would normally send order data to backend or process payment

    navigate('/orders'); // Redirect after placing order
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ----------- Left Side ----------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className="flex gap-3">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <div className="flex gap-3">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            name="street"
            value={form.street}
            onChange={handleChange}
            type="text"
            placeholder="Street"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <div className="flex gap-3">
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            type="text"
            placeholder="Postal Code"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <div className="flex gap-3">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="number"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            type="text"
            placeholder="Country"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>

      {/* ----------- Right Side ----------- */}
      <div className="mt-8 w-full sm:w-auto">
        <div className="mt-12">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* ----------- Payment Method Selection ----------- */}
          <div className="flex gap-3 flex-col lg:flex-row mt-4">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'stripe' ? 'border-green-500' : ''
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'stripe' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'razorpay' ? 'border-green-500' : ''
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'razorpay' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'cod' ? 'border-green-500' : ''
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
