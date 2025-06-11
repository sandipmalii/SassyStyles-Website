import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("DB Connected");
  });

  // Optional: Add error handling for connection
  mongoose.connection.on('error', (err) => {
    console.error("DB Connection Error:", err);
  });

  // Optional: Add disconnected event
  mongoose.connection.on('disconnected', () => {
    console.log("DB Disconnected");
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;