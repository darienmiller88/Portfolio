import React from 'react'
import "./Hero.css"
import SectionDivider from '../../components/SectionDivider/SectionDivider'
import Typical from 'react-typical'


export default function Hero() {
    return (
        <div id="hero-section">
            <div className="hi">Welcome! My name is</div>
            <div className="name" >
                Darien Miller.
            </div>
           
            <div className="slogan"> 
                <Typical
                    steps={[
                        "Full Stack Developer 💻", 
                        1500,
                        "React Developer ⚛️", 
                        1500,
                        "CS Tutor 🤓", 
                        1500,
                        "Go Developer 🙌",
                        1500
                    ]}
                    loop={Infinity}
                />
            </div>     

            <br/>
            <p className="description">
                I'm a recent Computer Science graduate specializing in Full Stack 
                development with a focus on backend development. I am currently focusing on 
                building fast, responsive and secure web applications for my clients.
            </p>
            <br/>
            <div className='github-link-wrapper'>
                <a className="github-link" href="https://github.com/darienmiller88">
                    Check out my projects!
                </a>
            </div>
            
            <SectionDivider/>
        </div>
    )
}
