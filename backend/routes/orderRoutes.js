import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';
const router = express.Router();
router.post('/', protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/paid').put(protect, updateOrderToPaid);

export default router;
