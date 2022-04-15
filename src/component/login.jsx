import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import {pagetransition}  from "./home";
import { imgmotion } from "./register";
import { buttonhover } from "./register";


const Login = () => {
    return (
        <motion.div variants={pagetransition}
        initial = "before"
        animate = "after"
        exit = "exit">
            <div className="container ct py-3 login d-flex mt-3 justify-content-center">
                <div className="row">
                    <h1 className="text-center mb-4">Login</h1>
                    <motion.div
                    variants={imgmotion}
                    initial = "before"
                    animate = "after"
                    className="col-md-6">
                        <img src="assests/login.png" className="img-fluid" alt="loginpng" height={500} width={600} />
                    </motion.div>
                    <div className="col-md-6">
                        <form class="row g-3">
                            <motion.div initial ={{x :1200}} animate = {{x:0}} transition = {{delay:.6,duration:1}} class="col-md-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control w-75" id="inputEmail4" />
                            </motion.div>
                            <motion.div initial ={{x :1200}} animate = {{x:0}} transition = {{delay:.9,duration:1}} class="col-md-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control w-75" id="inputPassword4" />
                            </motion.div>
                            <motion.div initial ={{x :1200}} animate = {{x:0}} transition = {{delay:1.2,duration:1}} class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label class="form-check-label" for="gridCheck">
                                            Keep me login
                                        </label>
                                </div>
                            
                            </motion.div>
                            <motion.div initial ={{x :1200}} animate = {{x:0}} transition = {{delay:1.5,duration:1}} class="col-12">
                                <motion.button    variants={buttonhover}
                                    whileHover = "hover"
                                    animate ="visible" type="submit" class="btn btn-dark">Login</motion.button>
                                <NavLink className="mx-3" to = "/register"><a>sign up</a></NavLink>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Login;