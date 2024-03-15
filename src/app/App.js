import './../app/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Register from '../pages/Register';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';
import SignIn from '../pages/SignIn';
function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/sign-in" element = {<SignIn/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
