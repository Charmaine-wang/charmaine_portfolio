import React from 'react'
import "./About.css"
import Arrow from "../Arrow"


const About = () => {

    return  (
        <div className="about-con-arrow">
        <div className="about-container">
            <div className="about-dot"></div>
            <div className="about-line"></div>
            <h3 className="about-text">About & Contact</h3>
            <div className="about-line"></div>
            <div className="about-dot"></div>
        </div>
            
        <Arrow />

        </div>
    )
}
export default About