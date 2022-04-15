import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { delitem } from '../redux/action'
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
const Cart=()=> {
    const state = useSelector((state) => state.additems)
    const dispath = useDispatch();

    const handleClose = (item)=>{
        dispath(delitem(item))
    }
    const cartItems = (cartItem)=>{
        return(
            <div className="px-4 my-5 rounded-3" key = {cartItem.id}>
                <div className="container py-3 cartt">  
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-lg-4 col-xl-3 col-sm-5 d-flex justify-content-center mb-3   ">
                            <img src = {cartItem.image} class = "cartimg img-box border rounded-3" height = {200} width = {180} alt = "image"/>
                        </div>
                        <div className="col-md-7 col-sm-6"> 
                            <h3 className='fonta ct text-s text-sm-start text-center'>{cartItem.title}</h3>
                            <p className='lead ag fonta text-s fw-bold text-sm-start text-center'>${cartItem.price}</p>
                            <div className="btncontrol d-flex justify-content-center">
                                <button onClick = {()=>handleClose(cartItem)} className="btn-close " aria-label='Close'></button>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart = () =>{
        return (
            <>
            <div className="px-4 my-5 rounded-3" >
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is empty now</h3>
                    </div>
                </div>
                </div>
            </>
        )
    }
    const button = ()=>{
        return(
            <div className="container px-5">
                <div className="row">
                    <NavLink to = '/checkout' className='btn btn-outline-primary mb-5'>Proceed to CheckOut</NavLink>
                </div>
            </div>
        )
    }
  return (
    <motion.div 
    variants={pagetransition}
    initial = "before"
    animate = "after"
    exit = "exit">
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
    </motion.div>
  )
}

export default Cart