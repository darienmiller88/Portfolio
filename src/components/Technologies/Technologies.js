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
                <div className="technology techtwo">
                    <div className="icon-div">
                        <FaReact className="icon"/>
                    </div>  
                    <div className="technology-header">
                        <h4>Front-End</h4>
                    </div>     
                    <div className="technology-description">
                        <p>
                            Experience with React.js, Vue and Next.js
                        </p>
                    </div>
                    <div className="button-section">
                        <button>Read more </button>
                    </div>
                </div>
                <div className="technology techtwo">
                    <div className="icon-div">
                        <FaDatabase className="icon"/>
                    </div>
                    <div className="technology-header">
                        <h4>Back-End</h4>
                    </div>    
                    <div className="technology-description">
                        <p>
                           Experience with MongoDB, PostgreSQL, MySQL,
                           Heroku, Docker 
                        </p>
                    </div>
                    <div className="button-section">
                        <button>Read more</button>
                    </div>
                </div>
                <div className="technology techtwo">
                   <div className="icon-div">
                        <FaFigma className="icon"/>
                    </div> 
                    <div className="technology-header">
                        <h4>UI/UX</h4>
                    </div> 
                    <div className="technology-description">
                        <p>
                            Experience with tools such as Figma and blah blah blah
                        </p>
                    </div>
                    <div className="button-section">
                        <button>Read more </button>
                    </div>
                </div>
            </div> 
            <SectionDivider/>
        </div>
    )
}
