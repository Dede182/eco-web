import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
const Cartbtn = ()=>{
    const state = useSelector((state)=>state.additems);  
    console.log(state)
    return(
        <>
            <NavLink to="/cart" className="btn bb btn-sm button">
            <i class="fa-solid fa-cart-shopping"></i>Cart ({state.length})</NavLink>
        </>
    )
}

export default Cartbtn;