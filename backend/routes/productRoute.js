// import express from 'express';
// import { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';
// import { adminAuth } from '../middleware/auth.js';

// import upload from '../middleware/multer.js';

// const productRouter = express.Router();

// productRouter.post('/add',adminAuth,upload.fields([
//   { name: 'image1', maxCount: 1 },
//   { name: 'image2', maxCount: 1 },
//   { name: 'image3', maxCount: 1 },
//   { name: 'image4', maxCount: 1 }
// ]), addProduct);

// productRouter.post('/remove',adminAuth,deleteProduct);
// productRouter.post('/single',getProductById);
// productRouter.get('/list',getAllProducts);

// export default productRouter;


import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

// Create Product (Admin only)
productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
  ]),
  addProduct
);

// Delete Product (Admin only)
productRouter.post('/remove', adminAuth, deleteProduct);

// Get single product (Public)
productRouter.post('/single', getProductById);

// Get all products (Public)
productRouter.get('/list', getAllProducts);

export default productRouter;
