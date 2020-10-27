import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoute from './routes/productRoutes.js';
import userRoutes from './routes/userRoute.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleWare.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/products', productRoute);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
