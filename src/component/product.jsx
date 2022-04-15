import React from "react";
import { useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch } from "react-redux";
import {additem,delitem} from "../redux/action/index"
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
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
                  <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>  
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
                    <img src={products.image} alt={products.title} height = "400px" width = "400px" />
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
                <div className="row py-2">
                    {loading ? <Loading/> : <Showproduct/>}
                </div>
            </div>
        </motion.div>
    )
}
export default Product;