import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import {pagetransition}  from "./home";
export const imgmotion = {
    before:{
        scale : 0,
        opacity : .1
    },
    after:{
        scale : 1,
        opacity : 1,
        transition:{
            delay:.7,
            duration :1.3,
        } 
    }
}
export const buttonhover = {
    visible:{
       transition:{
        delay:.1
    }
    }
    ,
    hover:{
           scale : 1.05,
           textShadow : '0px 0px 8px rgb(255,255,255)',
           boxShadow :  '0px 0px 8px rgb(0,0,0)',
           background:'black'
           
    }
}
const Register = () => {
    return (
        <div>
            <motion.div
            variants={pagetransition}
            initial = "before"
            animate = "after"
            exit = "exit"
            className="container ct py-3 login d-flex mt-1 justify-content-center">
                <div className="row">
                    <h1 className="text-center mb-4">Register</h1>
                    <motion.div className="col-md-6" 
                    variants={imgmotion}
                    initial = "before"
                    animate = "after">
                        <img src="assests/sign.png" className="img-fluid" alt="loginpng" height={500} width={600} />
                    </motion.div>
                    <div className="col-md-6">
                        <form class="row g-3">
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:.7,duration:1}} class="col-md-6">
                                <label for="inputEmail4" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputEmail4" />
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:1,duration:1}} class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>.2
                                <input type="email" class="form-control" id="inputEmail4" />
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:1.3,duration:1}} class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:1.6,duration:1}} class="col-md-6">
                                <label for="inputPassword4" class="form-label">Enter Password again</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:1.9,duration:1}} class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:2,duration:1}} class="col-12">
                                <label for="inputAddress" class="form-label">Ph number</label>
                                <input type="number" class="form-control" id="inputAddress" placeholder="09xxxx" />
                            </motion.div>
                            <motion.fieldset initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:2,duration:1}} class="row mt-3">
                                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                            <label class="form-check-label" for="gridRadios1">
                                                Male
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label class="form-check-label" for="gridRadios2">
                                               Female
                                            </label>
                                    </div>
                                </div>
                            </motion.fieldset>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:2,duration:1}} class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </motion.div>
                            <motion.div initial ={{scale:0}} animate = {{scale:1}} transition = {{delay:2,duration:1}} class="col-12">
                                <motion.button
                                    variants={buttonhover}
                                    whileHover = "hover"
                                    animate ="visible"
                                type="submit" class="btn mx-2 btn-dark">
                                    Register
                                </motion.button>
                                if you have account,log in <NavLink to = '/login'><a>here</a></NavLink>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default Register;