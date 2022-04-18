import React, { Component } from 'react'
import Product from './products.jsx'
import { motion } from 'framer-motion'
import { Carousel } from 'react-bootstrap'
export const pagetransition = {
    before:{
        opacity:0,
        x : 1000,
        
    },
    after : {
        opacity : 1,
        x:0,
        y:0,    
        transition:{
            duration:1,
            when:"beforeChildren",
        }
    },
    exit:{
        opacity:1
    }
}
const Home = () =>{
    
    return(
        <div 
        className='hero'> 
            <motion.div
            variants={pagetransition}
            initial = "before"
            animate = "after"
            exit = "exit"
            className="card p-2 border-0">
            <Carousel fade touch >
  <Carousel.Item>
    <img
      className="d-block mg w-100"
      src="assests/pin_10.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mg w-100"
      src="assests/promo.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  
</Carousel>
            </motion.div>
            <Product/>
           
        </div>
    )
}
export default Home;
