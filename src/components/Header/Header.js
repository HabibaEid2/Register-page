import './header.css'
import { Container  , Navbar , Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react' ; 
import { token } from '../../context/Context';
import Cookies from 'universal-cookie';
export default function Header() {
    let [out , setOut] = useState(true) ; 
    let [active , setActive] = useState(0)
    let context = useContext(token) ; 
    let cookie = new Cookies() ; 
    
        if (context.value!= null && out !== false) {
            setOut(false) ; 
        }  


    let prev; 
    if (prev === !context.value) {

    }
    prev = context.value ; 
    function logout() {
        cookie.remove("token") ; 
        context.setValue(null) ; 
        setActive(++active)
        setOut(true) ;
    }
    let register = <Nav style={{display : "flex" , gap : '5px' , flexDirection: "row"}}>
                        <Link to="register">
                            <Button variant='success'>register</Button>
                        </Link>
                        <Link to="sign-in">
                            <Button variant='success'>sign in</Button>
                        </Link>
                    </Nav>

    let logoutB = <Nav>
        <Button onClick={logout} variant='success' style={{width : "fit-content"}}>Log Out</Button>
    </Nav>
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href={out ? "/error" : "/products"}>Products</Nav.Link>
                        <Nav.Link href={out ? "/error" : "/users"}>Users</Nav.Link>
                    </Nav>
                    {out ? register : logoutB}
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}