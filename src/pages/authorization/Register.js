import { useContext, useState } from 'react';
import {Form , Button , Container ,Alert} from 'react-bootstrap';
import React from 'react';
import './index.css'
import Cookies from 'universal-cookie';
import { auth } from '../../context/Context';
export default function Register() {
    let [name , setName] = useState("") ; 
    let [email , setEmail] = useState("") ; 
    let [pass , setPass] = useState("") ; 
    let [rePass , setRePass] = useState("") ; 
    let [valid , setValid] = useState(false) ; 
    let [state , setState] = useState(false) ; 
    let cookie = new Cookies() ; 
    let context = useContext(auth) ; 
    function register(e) {
        e.preventDefault() ; 
        setValid(true) ; 
        if (pass.length >= 8 && pass === rePass && name.length !== 0) {
            cookie.set("email" , email) ; 
            context.setValue(email)
            setState(true) ;   
        } 
        }
    return (
        <Container style={{paddingBottom : "50px"}}>
            <Form style = {{margin : "100px auto 20px"}}>
                {state ? <Alert variant={"success"}>the data submitted successfully</Alert> : ""}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label >User Name</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Enter your name" 
                    onChange={(e) => setName(e.target.value)}/>
                    <Form.Text >{valid && name.length < 1 ? "*name is required!" : ""}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPass(e.target.value)}/>
                    <Form.Text >{valid && pass.length < 8 ? "*password length most be at least 8 characters!" : ""}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="reenter Password" 
                    onChange={(e) => setRePass(e.target.value)}/>
                    <Form.Text>{valid && pass !== rePass ? "*re-enter password correctly!" : ""}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter Email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={register}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}