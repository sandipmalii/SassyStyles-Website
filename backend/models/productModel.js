import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true }, // Assuming array of image URLs
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true }, // Assuming array of available sizes (e.g., ["S", "M", "L"])
  bestseller: { type: Boolean, default: false }, // Added a default value as it's optional
  date: { type: Number, required: true } // Could also be { type: Date, default: Date.now } for a timestamp
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;