import React from "react";

export class HeroSection extends React.Component{
    render(){
        return(
            <div className="hero-section">
                <div className="hero-text-container">
                    <h1 className="hero-heading">This is my 10 days of learning React</h1>
                    <p className="hero-description">I learned react in 8 days and I made a basic website using what I learned</p>
                    <button className="hero-button nullify-button">Visit blog</button>
                </div>
            </div>
        )
    }
}