import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  console.log(product._id);
  return (
    <Card className='my-3 p-2 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <div style={{ textDecoration: 'empty' }}>{product.name}</div>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {product.price > 0 && <Card.Text as='h6'>${product.price}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Product;
