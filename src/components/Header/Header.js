import './header.css'
import { Container  , Navbar , Nav, Button} from 'react-bootstrap'
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
                        <Nav.Link href="/products">PRODUCTS</Nav.Link>
                        <Nav.Link href="/users">USERS</Nav.Link>
                    </Nav>
                    <Nav style={{display : "flex" , gap : '10px' , flexDirection: "row"}}>
                        <Nav.Link href="register">
                            <Button variant='success'>register</Button>
                        </Nav.Link>
                        <Nav.Link href="sign-in">
                            <Button variant='success'>sign in</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </header>
    )
}