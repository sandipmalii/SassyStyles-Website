// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';


// // App Config
// const app = express();
// const port = process.env.PORT || 4000;
// connectDB()
// connectCloudinary();

// // middlewares
// app.use(express.json());
// app.use(cors());

// //api endpoints
// app.use('/api/users',userRouter);
// app.use('/api/product',productRouter);


// // api endpoints
// app.get('/', (req, res) => {
//   res.send("API Working");
// });

// // Listen
// app.listen(port, () => console.log(`Server started on http://localhost:${port}`));


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// Initialize App
const app = express();
const port = process.env.PORT || 4000;

// Connect to database & cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);  // ⚠ Small correction: plural routes are always preferred

// Health Check Route
app.get('/', (req, res) => {
  res.send("API is Working ✅");
});

// Start Server
app.listen(port, () => console.log(`🚀 Server started at http://localhost:${port}`));
