import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta'
import Paginate from '../components/Paginate'
import Product from '../components/Product';
import ProductCarousal from '../components/ProductCarousal';
import {Link} from 'react-router-dom';


const HomeScreen = ({match}) => {

  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch,keyword,pageNumber]);
  // const loading = false;
  // const error = false;
  // const products = [];
  return (
    <>
    <Meta />
    
    
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        {!keyword ? <ProductCarousal /> : <Link to='/' className='btn btn-light'>Go Back</Link> }
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ?keyword:''}  />
        </>
      )}
    </>
  );
};

export default HomeScreen;
