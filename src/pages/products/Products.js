import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import { Card, Container , Button , CardBody , CardImg , CardText , CardTitle} from "react-bootstrap"
import './products.css'
import { products_imgs } from "./products-imgs/images"
export default function Products() {
    let [products , setProducts] = useState([]) ; 
    let images = products_imgs ; 
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res.data)
            let result = res.data.map((ele) => {
                return (
                    <Card style={{width: "18rem"}} key={ele.id}>
                        <CardImg src= {images[ele.id]} alt="..." className="card-img"/>
                        <CardBody>
                            <CardTitle>{ele.title.slice(0 , 10)}</CardTitle>
                            <CardText>{ele.description.slice(0 , 150)}</CardText>
                            <Button variant="danger">Buy</Button>
                        </CardBody>
                    </Card>
                )
            })
            setProducts(result) ;  
        })
    } , [])
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