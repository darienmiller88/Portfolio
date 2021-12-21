import React from 'react'
import "./About.css"
import myPic from "../../img/me2.PNG"
import SectionDivider from "../SectionDivider/SectionDivider"

export default function About() {
    return (
        <div id="about-section">
            <div className="about-header" style={{color: "white"}}>
                <span className="number">01.</span> About me <hr width="70%"/>
            </div>

            <div className="about-me">
                <div className="about-me-description">
                    Hey there. My name is Darien and I enjoy creating things that live on the internet. 
                    My interest in web development started back in 2012 when I decided to try editing 
                    custom Tumblr themes — turns out hacking together a custom reblog button taught me
                    a lot about HTML & CSS!
                    <br/><br/>
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                    a start-up, a huge corporation, and a student-led design studio. My main focus these
                    days is building accessible, inclusive products and digital experiences at
                    <a href='/'> Upstatement </a>
                    for a variety of clients.
                    <br/><br/>
                    I also recently launched a course that covers everything you need to build a web app
                    with the Spotify API using Node & React.
                    </div>
                <div className="my-pic-div">
                    <img src={myPic}  alt="me" id="pic"/>
                </div>
            </div>
            <SectionDivider/>
        </div>
        
    )
}
