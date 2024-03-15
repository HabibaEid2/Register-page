import { useState } from 'react';
import {Form , Button , Container , Alert} from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
import './index.css'
export default function SignIn() {
    let [email , setEmail] = useState("") ; 
    let [pass , setPass] = useState("") ; 
    let [err , setErr] = useState("") ; 
    let [valid , setValid] = useState(false) ; 
    let [state , setState] = useState(false) ; 
    async function signIn(e) {
        e.preventDefault() ; 
        setValid(true) ; 
        if (pass.length >= 8) {
            try {
                await axios.post("http://127.0.0.1:8000/api/login" , {
                password : pass , 
                email : email , 
            }).then((res) => {
                setErr("") ; 
                if (res.status === 200) {
                    setState(true)
                }
                console.log(res)
            })
            } 
            catch(err) {
                if (err.response.status === 401) {
                    setErr("the email or password isn't correct!")
                }
                console.log(err)
            }
        }
    }
    return (
        <Container>
            <div className='form'>
                <Form style = {{padding : "30px 0"}} onSubmit={signIn}>
                    {state ? <Alert variant={"success"}>the data submitted successfully</Alert> : ""}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPass(e.target.value)}/>
                        <Form.Text >{valid && pass.length < 8 ? "password length must be at least 8 characters!" : ""}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text>{err}</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        sign in
                    </Button>
                </Form>
                
            </div>
        </Container>
    );
}