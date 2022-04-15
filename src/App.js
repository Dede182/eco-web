import './App.css';
import Home from './component/home'
import Navbar from './component/navbar';
import {Switch,Route,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Products from './component/products';
import About from './component/about'
import Contact from './component/contact'
import Login from './component/login';
import Register from './component/register';
import Product from './component/product';
import Cart from './component/cart'
import Checkout from './component/checkout';
import Animateroute from './animaterote';
function App() {
  const location = useLocation();
  return (
    <div className="App">
       <Navbar/>
       <AnimatePresence>
         <Animateroute/>
       </AnimatePresence>
    </div>
    
  );
}
export default App;
