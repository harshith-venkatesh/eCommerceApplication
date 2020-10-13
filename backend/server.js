import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoute from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleWare.js';
const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/products', productRoute);
const PORT = process.env.PORT || 5000;

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
