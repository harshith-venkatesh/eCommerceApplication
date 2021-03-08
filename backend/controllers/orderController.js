import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc Fetch All Orders
//@route GET /api/orders
// @access Public
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

//@desc GET order by id
//@route GET /api/orders/:id
// @access Public
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order Not Found!');
  }
});

//@desc Update order to delivered
//@route GET /api/orders/:id/delivered
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    
    const updatedOrder = await Order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order Not Found!');
  }
});

//@desc UPdate order by id
//@route GET /api/orders/:id/paid
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await Order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order Not Found!');
  }
});

//@desc Get logged in user Orders
//@route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  console.log(orders);
  res.json(orders);
});

//@desc Get all Orders
//@route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user','id name');
  console.log(orders);
  res.json(orders);
});


export { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered };
