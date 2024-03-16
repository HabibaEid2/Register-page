import Features from "./features/Features";
import Section from "./section/Section";
import React from "react";
export default function Home() {
    return (
        <div className="home">
            <Section/>
            <Features/>
        </div>
    )
}