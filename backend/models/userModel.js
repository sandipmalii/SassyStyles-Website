import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} } // Assuming cartData can be an empty object by default
}, { minimize: false }); // `minimize: false` prevents Mongoose from stripping empty objects

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;