// import { v2 as cloudinary } from "cloudinary";

// const connectCloudinary = async () => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_SECRET_KEY
//     });
//     console.log("Cloudinary configured successfully.");
//   } catch (error) {
//     console.error("Failed to configure Cloudinary:", error);
//     // Depending on your application's needs, you might want to throw the error
//     // or handle it differently, e.g., process.exit(1) for critical errors.
//   }
// };

// export default connectCloudinary;

import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
  });

  console.log("Cloudinary configured successfully.");
};

export default connectCloudinary;
