import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import { NavLink } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import {motion} from 'framer-motion'
import {pagetransition}  from "./home";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProucts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProucts();
    }, [])
    const Loading = () => {
            return (
            <>
                
                <div className="d-flex hh align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                         <Player
                        className="jambo"
                        autoplay
                        loop
                        speed = {.8}
                        src="assests/lottieanimation/loading.json"
                        style={{ height: '60vh', width: 'auto' }}>
                        </Player>
                        <h3 className="text-center fs-lg-1 fw-bold">Loading...</h3>
                    </div>
              
                </div>
            </>
        )
        
    }
    const filterpro = (para) =>{
        const upadatedlist = data.filter((er)=>er.category === para)
        setFilter(upadatedlist)       
    }

    const ShowProduct = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <motion.div  
                            initial ={{scale:0,opacity : 0}} animate = {{scale:1,opacity:1}} transition = {{delay:.1,duration:.1 * (product.id + 5)}}
                            className="p-card col-md-3 col-5 col-sm-5 col-xl-2 col-lg-3 mb-4 mx-2">
                                <div class="card text-center p-sm-2 p-4" key ={product.id}>
                                    <img src={product.image} class="card-img-top img-fluid" alt={product.title} />
                                    <div class="card-body">
                                        <h5 class="card-title ct">{product.title.substring(0,11)}...</h5>
                                        <p class="card-text ag lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} class="btn ag faw btn-sm blue-btn">Buy Now</NavLink>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )
                })}
            </>
        )

    }
    return (
        <motion.div  variants={pagetransition}
        initial = "before"
        animate = "after"
        exit = "exit">
            <div className="container-fluid mt-1 py-2">
                <div className="row">
                    <div className="col-12 mb-1">
                        <h1 className="display-5 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                    <form className="d-flex my-3 col-12">
                        <div className="container d-flex justify-content-center">
                        <input className="form-control search bg-dark text-white me-2 text-center" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn button btn-sm faw ag fw-bold" type="submit">Search</button></div>
                    </form>
                </div>
                <div className="row justify-content-center">
                <div className="buttons d-flex ef justify-content-center mb-2 pb-2">
                    <button className="button btn dd ag btn-sm btn-outline-dark me-3" onClick={()=>setFilter(data)} >All</button>
                    <button className="button btn dd ag btn-outline-dark me-3" onClick={()=>filterpro("men's clothing")}>Men's clothing</button>
                    <button className="button btn dd ag btn-outline-dark me-3" onClick={()=>filterpro("women's clothing")}>Women's clothing</button>
                    <button className="button btn dd ag btn-outline-dark me-3" onClick={()=>filterpro("jewelery")}>Jewerly</button>
                    <button className="button btn dd ag btn-outline-dark me-3" onClick={()=>filterpro("electronics")}>Electonic</button>
                </div>
                </div>
                <div className="container-fluid coo col-12 row justify-content-center">
                    {loading ? <Loading /> : <ShowProduct />} 
                </div>
            </div>
        </motion.div>
    )
}
export default Products;