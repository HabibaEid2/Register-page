import { useState } from 'react';
import {Form , Button , Container ,Alert} from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
import './index.css'
export default function Register() {
    let [name , setName] = useState("") ; 
    let [email , setEmail] = useState("") ; 
    let [pass , setPass] = useState("") ; 
    let [rePass , setRePass] = useState("") ; 
    let [errMess , setErrMess] = useState("") ; 
    let [valid , setValid] = useState(false) ; 
    let [state , setState] = useState(false) ; 
    async function register(e) {
        e.preventDefault() ; 
        setValid(true) ; 
        console.log(name)
        if (pass.length >= 8 && pass === rePass && name.length !== 0) {
            console.log(true) ; 
            try {
                await axios.post("http://127.0.0.1:8000/api/register" , {
                name : name , 
                password : pass , 
                password_confirmation : rePass , 
                email : email , 
            }).then((res) => {
                setErrMess("") ;
                if (res.status === 200) setState(true) ; 
            })
            } 
            catch(err) {
                if (err.response.status === 422) setErrMess("*the email has been token before!")
                console.log(err)
            }
        }
    }
    return (
        <Container>
            <div className='form'>
                <Form style = {{padding : "30px 0"}} onSubmit={register}>
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
                        <Form.Text>{valid ? errMess : ""}</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </Container>
    );
}