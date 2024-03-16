import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import { Card, Container , Button , CardBody , CardImg , CardText , CardTitle} from "react-bootstrap"
import './products.css'
export default function Products() {
    let [products , setProducts] = useState([]) ; 
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res.data)
            let result = res.data.map((ele) => {
                return (
                    <Card style={{width: "18rem"}} key={ele.id}>
                        <CardImg src= {"..."} alt="..."/>
                        <CardBody>
                            <CardTitle>{ele.title.slice(0 , 10)}</CardTitle>
                            <CardText>{ele.description.slice(0 , 200)}</CardText>
                            <Button>Buy</Button>
                        </CardBody>
                    </Card>
                )
            })
            setProducts(result) ;  
        })
    } , [])
    console.log(products)
    return (
        <div className="content">
            <h1 className="mainTitle">Our Homes</h1>
            <Container>
                <div className="products">
                {products}
                </div>
            </Container>
        </div>
    )
}