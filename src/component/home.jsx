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
            <div className="footer ps-4 container py-3 ">
              <div className="row gx-0 px-3  d-flex ">
                <div className="col-6 my-3 col-md-3">
                <h5 >Developer</h5>
              <ul class="list text-small">
                <li><a class="text-muted" target='on_blank' href="https://www.facebook.com/htet.s.htwe.12"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                <li><a class="text-muted" target='on_blank' href="https://github.com/Dede182"><i class="fa-brands fa-github"></i> Github</a></li>
                <li><a class="text-muted" target='on_blank' href="#"><i class="fa-brands fa-google"></i> Gmail</a></li>
                <li><a class="text-muted" target='on_blank' href="https://t.me/Kimomoakso"><i class="fa-brands fa-telegram"></i> Telegram</a></li>
              </ul>
                </div>
                <div className="col-6 my-3 col-md-3">
                <h5 >Features</h5>
              <ul class="list text-small">
              <li><a class="text-muted" href="#">Home</a></li>
              <li><a class="text-muted" href="#">Product</a></li>
              <li><a class="text-muted" href="#">About</a></li>
              <li><a class="text-muted" href="#">Contact</a></li>
              <li><a class="text-muted" href="#">Cart</a></li>
              </ul>
                </div>
                <div class="col-6 my-3 col-md-3">
                <h5 >About</h5>
                <ul class="list text-small">
                  <li><a class="text-muted" href="#">Team</a></li>
                  <li><a class="text-muted" href="#">Locations</a></li>
                  <li><a class="text-muted" href="#">Privacy</a></li>
                  <li><a class="text-muted" href="#">Terms</a></li>
                </ul>
                 </div>
                 <div class="col-6 my-3 col-md-3">
                <h5 >Service</h5>
                <ul class="list text-small">
                  <li className='text-muted'>24hrs-reply</li>
                  <li className='text-muted'>Delivery</li>
                  <li className='text-muted'>Promo-code</li>
                  <li className='text-muted'>Return</li>
                </ul>
                 </div>
                 <div className="col-12">
                   <h4 className='ct text-center'>Message us</h4>
                 <form action="#">
                      
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input type="email" class="form-control text-white bg-dark" id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                   Message
                                </label>
                                <textarea
                                    class="form-control text-white bg-dark mb-3"
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                ></textarea>
                                <button type = "submit" className = "blue-btn btn">Send Message</button>
                               </div>
                        </form>
                 </div>
              </div>
            </div>
        </div>
    )
}
export default Home;
