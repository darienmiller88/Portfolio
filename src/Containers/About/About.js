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
                        Hey there! My name is Darien and I'm Software Developer who's grown a little too obsessed 
                        with his craft. I started programming in 2017 mostly on game development in SFML and C++, and 
                        slowly transtioned to the web and Software development world using Go as my primary
                        backend language, numerous other front end tools such as Vue, React, Svelte, Sass.
                    </p>
                    <p>
                        As of today, I've measurably improved the lives of hundreds of students through my
                        private tutoring services and working at agencies like
                        <a href='https://bit.ly/3sxAXcB'> ADAPT Community Network </a>,
                        which allowed me to deliver introduction computer classes to individuals with diverse
                        learning differences. Recently,
                        I have become an alumni, and Data Analyst graduate from
                        <a href='https://coopcareers.org/'> COOP Carreers</a>, learning in demand
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
