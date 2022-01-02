import React from 'react'
import "./Technologies.css"
import SectionDivider from "../SectionDivider/SectionDivider"
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
                    <FaReact/><br/>
                    <h5>Front-End</h5>
                    <div className="technology-description">Experience with React.js, Vue and Next.js</div>
                </div>
                <div className="technology">
                    <FaDatabase/><br/>
                    <h5>Back-End</h5>
                    <div className="technology-description">Experience with MongoDB, PostgreSQL, MySQL,
                        Heroku, Docker
                    </div>
                </div>
                <div className="technology">
                    <FaFigma/><br/>
                    <h5>UI/UX</h5>
                    <div className="technology-description">Experience with tools such as Figma</div>
                </div>
            </div> 
            {/* <SectionDivider/> */}
        </div>
    )
}
