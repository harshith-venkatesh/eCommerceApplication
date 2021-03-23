import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentMethodScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id?' component={OrderScreen} />
          <Route path='/admin/orderList' component={OrderListScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route path='/admin/productList' component={ProductListScreen} exact/>
          <Route path='/admin/productList/:pageNumber' component={ProductListScreen} exact/>
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact/>
          <Route path='/page/:pageNumber' component={HomeScreen} exact/>
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
