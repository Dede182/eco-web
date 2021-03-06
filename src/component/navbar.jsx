import React from 'react'
import {NavLink} from 'react-router-dom';
import Cartbtn from './cartbtn';
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const colorval = {
  before : {
    opacity : .9,
    fill : 'rgb(0,0,0)',
  },
  after : {
    opacity : 1,
    transition:{
      delay:1,
      duration:2
    },
    fill : 'rgb(247,175,186)'
  }
}
 function Navbar() {
    return (
      <motion.div  variants={pagetransition}
      initial = "before"
      animate = "after"
      exit = "exit">
  <nav class="navbar ass navbar-expand-xl navbar-light">
  <div class="container-fluid px-lg-5">
    <NavLink className="navbar-brand  fw-bold" to="/">
        <motion.svg variants={colorval} initial = 'before' animate = 'after' xmlns="http://www.w3.org/2000/svg" className='svgg' viewBox="0 0 290 290" enable-background="new 0 0 297 297">
  <g>
    <path d="m95.694,121.27c0.389,0.779 1.096,1.354 1.937,1.577 0.843,0.226 1.743,0.069 2.464-0.409l48.405-32.27 48.406,32.271c0.721,0.48 1.629,0.632 2.463,0.408 0.841-0.224 1.548-0.798 1.937-1.577l16.337-32.671 49.419-32.947c0.958-0.638 1.478-1.788 1.325-2.927-0.153-1.143-0.957-2.116-2.05-2.48l-48.014-16.005v-31.205c0-0.973-0.472-1.894-1.261-2.463-0.785-0.565-1.815-0.723-2.738-0.417l-48.308,16.104-15.37-15.37c-0.772-0.774-1.676-0.889-2.146-0.889s-1.374,0.115-2.148,0.89l-15.368,15.369-48.312-16.105c-0.307-0.101-0.63-0.154-0.956-0.154-0.644,0-1.258,0.198-1.777,0.572-0.79,0.569-1.262,1.49-1.262,2.463v31.205l-48.014,16.005c-1.093,0.363-1.896,1.337-2.049,2.478-0.153,1.141 0.366,2.291 1.324,2.929l49.419,32.947 16.337,32.671z"/>
    <path d="m228.631,98.299l-14.115,28.231c0.256-0.02 0.511-0.04 0.771-0.04 5.589,0 10.119,4.531 10.119,10.119v16.697c0,5.588-4.53,10.119-10.119,10.119-5.588,0-10.119-4.531-10.119-10.119v-16.697c0-0.283 0.02-0.563 0.043-0.84-0.716,0.3-1.446,0.568-2.205,0.77-1.44,0.383-2.925,0.576-4.415,0.576-3.41,0-6.71-1-9.546-2.891l-40.545-27.03-40.548,27.032c-2.838,1.891-6.138,2.889-9.545,2.889-1.489,0-2.976-0.193-4.415-0.576-0.758-0.202-1.487-0.471-2.203-0.77 0.023,0.277 0.043,0.557 0.043,0.84v16.697c0,5.588-4.531,10.119-10.119,10.119-5.589,0-10.119-4.531-10.119-10.119v-16.697c0-5.588 4.53-10.119 10.119-10.119 0.261,0 0.516,0.02 0.771,0.04l-14.115-28.231-29.844-19.897c-8.279,11.362-13.202,25.428-13.202,40.658 0,43.98 20.527,88.526 59.364,128.82 28.887,29.972 57.466,47.003 58.669,47.713 1.587,0.938 3.367,1.406 5.146,1.406 1.78,0 3.56-0.469 5.146-1.406 1.203-0.71 29.781-17.741 58.667-47.713 38.834-40.294 59.36-84.84 59.36-128.822 0-15.229-4.922-29.295-13.201-40.656l-29.843,19.897zm-103.405,105.097c0,5.589-4.531,10.12-10.119,10.12-5.589,0-10.119-4.531-10.119-10.12v-16.696c0-5.589 4.53-10.119 10.119-10.119 5.588,0 10.119,4.53 10.119,10.119v16.696zm33.393,33.395c0,5.588-4.531,10.119-10.119,10.119s-10.119-4.531-10.119-10.119v-16.697c0-5.588 4.531-10.119 10.119-10.119s10.119,4.531 10.119,10.119v16.697zm0-66.787c0,5.588-4.531,10.119-10.119,10.119s-10.119-4.531-10.119-10.119v-16.697c0-5.588 4.531-10.119 10.119-10.119s10.119,4.531 10.119,10.119v16.697zm33.394,33.392c0,5.589-4.53,10.12-10.119,10.12-5.588,0-10.119-4.531-10.119-10.12v-16.696c0-5.589 4.531-10.119 10.119-10.119 5.589,0 10.119,4.53 10.119,10.119v16.696z"/>
  </g>
</motion.svg>
  SV Collection</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-2 mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
          <Player
              autoplay
              loop
              src="https://cdn.lordicon.com/igpbsrza.json"
              style={{ height: '30px', width: '30px' }}>

              </Player>
            Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
          <Player
              autoplay
              loop
              src="https://cdn.lordicon.com/webtefou.json"
              style={{ height: '30px', width: '30px' }}>

              </Player>
            Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
          <Player
               autoplay
               loop 
              src="https://cdn.lordicon.com/dklbhvrt.json"
              style={{ height: '30px', width: '30px' }}>

              </Player>
            About</NavLink>
        </li>
        <li className="nav-item">
        
          <NavLink className="nav-link" to="/contact">
          <Player
            autoplay
             loop
              src="https://cdn.lordicon.com/itykargr.json"
              style={{ height: '30px', width: '30px' }}>

              </Player>
            Contact</NavLink>
        </li>
      </ul>
      <div className="buttons d-flex justify-content-center">
        <button className="btn a">
          <NavLink to="/login" className="btn ag btn-sm button">
            <i class= "fa fa-sign-in me-1"></i>Login</NavLink>
        </button>
        <button className="btn a">
          <NavLink to="/register" className="btn ag btn-sm button">
            <i className = "fa-solid fa-user-plus me-1"></i>Register</NavLink>
        </button>
        <button className="btn a">
          <Cartbtn/>
        </button>
      </div>
    </div>
  </div>
</nav>
      </motion.div>
    )

}
export default Navbar;