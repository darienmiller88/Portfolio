import React from 'react'
import "./About.css"
import myPic from "../../img/currentme.jpg"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Horizontal from "../../components/Horizontal/Horizontal"

export default function About() {
    return (
        <div id="about-section">
            <div className="header">
                About me 
            </div>
            <Horizontal />

            <div className="about-me">
                <div className="about-me-description">
                    <p>
                        Hey there! My name is Darien and I'm Software Developer with a focus on Back end 
                        development and specialization in lower level languages such as C++ and Go. 
                        I started programming in 2017 mostly on game development in SFML and C++, and 
                        slowly transtioned to the web and Software development world using Go as my primary
                        backend language.
                    </p>
                    <p>
                        As of today, I've measurably improved the lives of hundreds of clients through my
                        private tutoring services and working at agencies like 
                        <a href='https://bit.ly/3sxAXcB'> CUNY Tutor Corps </a>,
                        be they colleagues working alongside me, or school students K through 12. Recently,
                        I have become an alumni, and Software Engineering graduate from
                        <a href='https://cunytechprep.nyc/'> CUNY Tech Prep </a>, learning in demand
                        skills and growing my network substantially.
                    </p>
                </div>
                <div className="my-pic-div">
                    <img src={myPic}  alt="me" id="pic"/>
                </div>
            </div>
            <SectionDivider addMargin={false}/>
        </div>
    )
}
