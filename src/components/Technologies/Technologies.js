import React from 'react'
import "./Technologies.css"
import SectionDivider from "../SectionDivider/SectionDivider"
import TechnologyCard from "../TechnologyCard/TechnologyCard"
import { FaReact, FaDatabase, FaFigma } from 'react-icons/fa'

export default function Technologies() {
    return (
        <div id="technologies-section">
            <div className="technologies-header" style={{color: "white"}}>
                <span className="number">02.</span> Technologies <hr width="75%"/>
            </div>
            <p>
                I've worked with a number of tools to aid in software development, including both
                Front-End and Back-End tools.
            </p>
            <br/>

            <div className="technologies">
                <div className="technology">
                    <div className="icon-div">
                        <FaReact className="icon"/>
                    </div>  
                    <div className="technology-header">
                        <h3>Front-End</h3>
                    </div>     
                    <div className="technology-description">
                        <p>
                        I have extensive experience in using Javascript frameworks to beautify 
                        and modularize my projects. I have a strong preference for React.js, but I have 
                        also used Vue.js and Next.js.
                        </p>
                    </div>
                    <div className="button-section">
                        <a href='#project-section'>Read more</a>
                    </div>
                </div>
                <div className="technology">
                    <div className="icon-div">
                        <FaDatabase className="icon"/>
                    </div>
                    <div className="technology-header">
                        <h3>Back-End</h3>
                    </div>    
                    <div className="technology-description">
                        <p>
                            Due to being primarily Back-end based, I can utilize multiple technologies
                            such as MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker.
                        </p>
                    </div>
                    <div className="button-section">
                        <a href="#project-section">Read more</a>
                    </div>
                </div>
                <div className="technology">
                   <div className="icon-div">
                        <FaFigma className="icon"/>
                    </div> 
                    <div className="technology-header">
                        <h3>UI/UX</h3>
                    </div> 
                    <div className="technology-description">
                        <p>
                            I have achieved success in the UI/UX field using schematic tools such as Figma.
                        </p>
                    </div>
                    <div className="button-section">
                        <a href="https://www.figma.com/">Read more</a>
                    </div>
                </div>
            </div> 
            <SectionDivider/>
        </div>
    )
}
