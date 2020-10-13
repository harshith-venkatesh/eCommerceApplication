import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();
//@desc Fetch all products
//@route GET /api/products
//@access Fetch all products- PUBLIC
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//@desc Fetch one product
//@route GET /api/product/:id
//@access Fetch all products- PUBLIC
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error('Product Not found');
    }
  })
);
export default router;
