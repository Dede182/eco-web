import React, { Component } from 'react'
import Product from './products.jsx'
import { motion } from 'framer-motion'
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
            className="card bg-dark text-white border-0">
            <img src="assests/d.png" className="card-img ss image-fluid" height = "600px" alt="background image"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                 <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                 <p className="card-text lead fs-2">Check out all the trends</p>
                
            </div>
            </div>
           
            </motion.div>
            <Product/>
        </div>
    )
}
export default Home;
