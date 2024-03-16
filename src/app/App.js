import './../app/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Register from '../pages/authorization/Register';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';
import SignIn from '../pages/authorization/SignIn';
import Products from '../pages/products/Products';
import Users from '../pages/users/Users';
import './../constant/css/all.min.css'
function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/sign-in" element = {<SignIn/>}></Route>
        <Route path = "/products" element = {<Products/>}></Route>
        <Route path = "/users" element = {<Users/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
