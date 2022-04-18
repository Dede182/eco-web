import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Spinner from "react-bootstrap/Spinner";
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
import { svgmotion,textmotion } from "./about";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Contact = () => {
    return (
        <motion.div variants={pagetransition}
        initial = "before"
        animate = "after"
        exit = "exit">
            <div className="container ct mb-3">
                <div className="row">
                    <div className="col-12 text-center py-3 my-0">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <motion.div
                    variants={textmotion}
                    initial = "before"
                    animate = "after"
                    className="col-md-6 d-flex justify-content-center">
                         <Player
                        className="jambo"
                        autoplay
                        loop
                        src="assests/lottieanimation/contact.json"
                        style={{ height: '60vh  ', width: 'auto' }}>
                     </Player>
                    </motion.div>
                    <motion.div
                    variants={svgmotion}
                    initial = "before"
                    animate = "after"
                    className="col-md-6 " >
                        <form action="#">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                   Message
                                </label>
                                <textarea
                                    class="form-control mb-3"
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                ></textarea>
                                <button type = "submit" className = "blue-btn btn">Send Message</button>
                               </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;