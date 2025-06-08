import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // You can add API submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="text-center py-10 px-4 bg-gray-100 rounded-lg shadow-sm">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-500 mt-3 text-sm">
        Stay updated with our latest collections, offers, and news.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto mt-6"
      >
        <input
          className="w-full sm:flex-1 outline-none border border-gray-300 p-3 rounded"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-6 py-3 uppercase rounded hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
