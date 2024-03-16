import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import { Card, Container , Button} from "react-bootstrap"
import './products.css'
export default function Products() {
    let [products , setProducts] = useState([]) ; 
    useEffect(()=> {
        try {
            axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                let data = res.data.map((ele) => {
                    return (<Card style={{ width: '18rem' , heigth : "auto"}} key = {ele.id} className="co-sm-12 col-md-6 col-lg-4">
                        <Card.Img variant="top" src={ele.image} style={{ height : "270px" }} />
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>{ele.description}</Card.Text>
                            <Button variant="success" style ={{verticalAlign : "end"}}>show</Button>
                        </Card.Body>
                    </Card>)
                })
                setProducts(data) ; 
            })
        } catch(err) {
            console.log(err) ; 
        }
    } ,[])
    return (
    <Container>
        <div className = "products" >{products}</div>
    </Container>
    )
}