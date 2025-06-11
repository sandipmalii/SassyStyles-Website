// import express from 'express';
// import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

// const userRouter = express.Router();

// userRouter.post('/register',registerUser);
// userRouter.post('/login',loginUser);
// userRouter.post('/admin',adminLogin);

// export default userRouter;

import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/productController.js'; 

const userRouter = express.Router();

// User Registration
userRouter.post('/register', registerUser);

// User Login
userRouter.post('/login', loginUser);

// Admin Login
userRouter.post('/admin-login', adminLogin);  // 🔧 more clear route name

export default userRouter;
