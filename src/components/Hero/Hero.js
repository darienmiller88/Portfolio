import React from 'react'
import "./Hero.css"
import SectionDivider from '../SectionDivider/SectionDivider'

export default function Hero() {
    return (
        <div id="hero-section">
            <div className="hi">Hello! My name is</div>
            <div className="name" >
                Darien Miller.
            </div>
            <div className="slogan">
                Rising Software Engineer.
            </div>             
            <br/>
            <p className="description">
                I'm a recent Computer Science graduate specializing in Full Stack 
                development with a focus on backend development. I am currently focusing on 
                building fast, responsive and secure web applications for my clients.
            </p>
            <br/>
            <a className="github-link" href="https://github.com/darienmiller88">
                Check out my projects!
            </a>
            <SectionDivider/>
        </div>
    )
}
