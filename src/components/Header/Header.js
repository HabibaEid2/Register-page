import './header.css'
import { Container  , Navbar , Nav, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react' ; 
import {auth } from '../../context/Context';
import Cookies from 'universal-cookie';
export default function Header() {
    let context = useContext(auth) ; 
    let cookie = new Cookies() ; 
    let go = useNavigate() ; 
    console.log(context.value === 'undefined') ; 
    console.log(context.value === undefined)
    function logout() {
        cookie.remove("email")
        context.setValue(undefined) ; 
        go("/")
    }
    let register = <Nav style={{display : "flex" , gap : '5px' , flexDirection: "row"}}>
                        <Link to="register">
                            <Button variant='success'>register</Button>
                        </Link>
                    </Nav>

    let logoutB = <Nav>
        <Button onClick={logout} variant='success' style={{width : "fit-content"}}>Log Out</Button>
    </Nav>
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href={context.value === undefined ? "error" : "products"}>Products</Nav.Link>
                    </Nav>
                    {context.value === undefined ? register : logoutB}
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}