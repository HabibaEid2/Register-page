import './../app/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Register from '../pages/authorization/Register';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';
import Products from '../pages/products/Products';
import './../constant/css/all.min.css'
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path = "" element = {<Home/>}></Route>
        <Route path = "products" element = {<Products/>}></Route>
        <Route path = "register" element = {<Register/>}></Route>
        <Route path = "error" element = {<Error/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
