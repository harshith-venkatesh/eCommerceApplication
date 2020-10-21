import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
const protect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Token Found');
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized,no token');
  }
  next();
};

export { protect };
