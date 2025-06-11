import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';


// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/users',userRouter);
app.use('/api/product',productRouter);


// api endpoints
app.get('/', (req, res) => {
  res.send("API Working");
});

// Listen
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));