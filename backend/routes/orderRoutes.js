import express from 'express';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';
const router = express.Router();
router.post('/', protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router;
