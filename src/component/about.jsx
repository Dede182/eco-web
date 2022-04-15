import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {motion} from 'framer-motion'
import Lottie from "lottie-web";
import { useEffect,useRef } from "react";
const pagetransition = {
    before:{
        opacity:0,
        x : 1000,
    },
    after: {
        opacity : 1,
        x:0,
        y:0,    
        transition:{
            duration:1.2,
            when:"beforeChildren",
        }
    },
    exit:{
        opacity:1
    }
}
export const textmotion = {
    before:{
        x:-1000,
        opacity : .0
    },
    after:{
        x:0,
        opacity : 1,
        transition:{
            delay:.6,
            duration :1.1,
        } 
    }
}
export const svgmotion = {
    before:{
        x:1000,
        opacity : .1
    },
    after:{
        x:0,
        opacity : 1,
        transition:{
            delay:.6,
            duration: 1.1
        }
    }
}
const About = ()=>{
    const anima = useRef(null);
    return(
        <div>
            <motion.div 
            variants={pagetransition}
            initial = "before"
            animate = "after"
            exit = "exit"
            className="container dde mt-5">
                <div
                className="row">
                    <motion.div variants={textmotion}
                        initial = "before"
                        animate = "after" className="col-md-6">
                        <h1>About us</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae explicabo nulla ad magni! Minus quas animi, dignissimos ab repudiandae fugit fugiat illum voluptas, nostrum error praesentium numquam sapiente ea, culpa natus exercitationem suscipit nisi unde. Facere numquam laboriosam repudiandae? Libero aspernatur, aliquid at provident voluptatum, illum distinctio hic inventore voluptatibus unde facere architecto atque consequuntur vero! Deserunt veritatis optio, nihil eaque quos possimus veniam consectetur.
                        </p> 
                        <NavLink to = "/contact" className = "blue-btn btn">Contact Us</NavLink>
                    </motion.div>
                <motion.div ref = {anima}  variants={svgmotion}
                     initial = "before"
                     animate = "after" className="col-md-6">
                        <img src="assests/lovepik.png" className="img-fluid" height={500} width = {600}  alt="lovepik.img" />
                </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
export default About;