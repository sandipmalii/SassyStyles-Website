import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'; 

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way you experience online shopping. We envisioned a platform where quality meets convenience, and every click brings you closer to your desired product.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality items, ensuring there's something for everyone. Our commitment extends beyond just products; we're dedicated to providing an unparalleled customer experience, from browsing to swift delivery.</p>
          <p><b className='text-gray-800'>Our Mission:</b> Our mission at Forever is to empower customers with choice, convenience, and confidence, offering a vast array of products at competitive prices, all while prioritizing exceptional service.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} /> {/* ✅ Fixed typo */}
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards. Every item undergoes rigorous inspection, guaranteeing that you receive nothing but the best.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier. From browsing to checkout, every step is designed for your comfort and efficiency.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring a smooth and satisfactory experience. Whether you have a question or need support, we're here to help.</p>
        </div>
      </div>

      <NewsletterBox /> {/* ✅ Correct usage after import */}
    </div>
  );
};

export default About;
