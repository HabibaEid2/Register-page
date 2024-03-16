import './header.css'
import { Container  , Navbar , Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import React from 'react' ; 
export default function Header() {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Nav>
                    <Nav style={{display : "flex" , gap : '5px' , flexDirection: "row"}}>
                        <Link to="register">
                            <Button variant='success'>register</Button>
                        </Link>
                        <Link to="sign-in">
                            <Button variant='success'>sign in</Button>
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}