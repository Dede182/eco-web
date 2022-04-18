import React from "react";
import { useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {additem,delitem} from "../redux/action/index"
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Product = ()=>{
    const [cartbtn,setcardbtn] = useState("Add to Cart");
    const [products,setProducts] = useState([]);
    const {id} = useParams();
    const [loading,setLoading] = useState(false);
    useEffect(()=>{ 
        const Getproduct = async()=>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProducts(await response.json());
            setLoading(false);
        }
        Getproduct();
    },[])
    const Loading = ()=>{
        return(
            <>
                <div className="d-flex hh align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                    <Player
                        className="jambo"
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_ppq0axrd.json"
                        style={{ height: '60vh  ', width: 'auto' }}>
                     </Player>
                        <p className="text-center fw-bold">Loading...</p>
                    </div>
              
                </div>
                
            </>
        )
    }
    //store dispath variable
    const dispath = useDispatch();
    const handleCart = (products)=>{

        if(cartbtn  === "Add to Cart"){
            dispath(additem(products))
            setcardbtn("Remove from cart");
        }
        else{ 
            dispath(delitem(products))
            setcardbtn("Add to Cart")
        }
    }
    const Showproduct = ()=>{
        return(
            <>
                <div className="jkj d-flex mt-3">
                <div className="img-for mb-5 mx-5">
                    <img className="img" src={products.image} alt={products.title} height = "400px" width = "400px" />
                </div>
                <div className="ct">
                    <h4 className="text-uppercase text-center text-black-75">
                        {products.category}
                    </h4>
                    <h1 className="ct text-center display-5">{products.title}</h1>
                    <p className="lead text-center ag fw-bolder">
                        Rating : {products.rating && products.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <div className="display-6 ct text-center fw-bold my-4">
                        <h3 className="ag text-center">
                            $ {products.price} 
                        </h3>
                       <p className="lead text-start">{products.description}</p>
                       <button onClick = {()=> handleCart(products)} alt = "remove" className="btn ag btn-outline-dark">
                           {cartbtn}
                       </button>
                       <NavLink to ="/cart" className="btn ag btn-dark ms-2 px-3 py-2">
                           Go to Cart
                       </NavLink>
                    </div>
                </div>
             </div>
            </>
        )
    }
    return(
        <motion.div  variants={pagetransition}
        initial = "before"
        animate = "after"
        exit = "exit">
            <div className="container py-2">
                <div className="row py-0">
                    {loading ? <Loading/> : <Showproduct/>}
                </div>
            </div>
        </motion.div>
    )
}
export default Product;