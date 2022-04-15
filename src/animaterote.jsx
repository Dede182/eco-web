import React from 'react'
import {Switch,Route,useLocation} from 'react-router-dom';
import Home from './component/home'
import Products from './component/products';
import About from './component/about'
import Contact from './component/contact'
import Login from './component/login';
import Register from './component/register';
import Product from './component/product';
import Cart from './component/cart'
import Checkout from './component/checkout';
import { AnimatePresence } from 'framer-motion';


function Animateroute() {
    const location = useLocation();
  return (
      <AnimatePresence>
    <Switch location={location} key = {location.pathname} >
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/contact" component={Contact}/>
            <Route exact path = "/products" component = {Products}/>
            <Route exact path = "/products/:id" component = {Product}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/cart" component={Cart}/>
            <Route exact path = "/checkout" component={Checkout}/>
          </Switch>
          </AnimatePresence>  
  )
}

export default Animateroute