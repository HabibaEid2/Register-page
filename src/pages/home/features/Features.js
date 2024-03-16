import React from "react"
import { Card, CardBody, CardImg, CardTitle, Container , CardText} from "react-bootstrap"
import { features } from "./FData"
import './features.css'
export default function Features() {
    let featuresData = features.map((ele) => {
        return (
            <Card style={{width: "18rem"}} >
                <CardImg src= {ele.featureImg} alt="..."/>
                <CardBody>
                    <CardTitle>{ele.featureTitle}</CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                </CardBody>
            </Card>
        )
    })
    
    return (
        <div className="features">
            <h1 className="mainTitle">Our Features</h1>
            <Container>
                <div className="feature">
                {featuresData}
                </div>
            </Container>
        </div>
    )
}