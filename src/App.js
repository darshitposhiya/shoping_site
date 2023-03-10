import React from "react";
import { Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Productsss from "./Components/Productsss";
import Cart from './Components/Cart'
import Checkout from "./Components/Checkout";


function App() {
  return (
<>
   <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shoping_site" element={<Home/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Productsss/:id" element={<Productsss/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>
   </Routes>

</>
   
   
  );
}

export default App;
