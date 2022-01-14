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
                <TechnologyCard
                    icon={<FaReact className='icon'/>}
                    header={"Front-End"}
                    description={
                        "I have extensive experience in using Javascript frameworks to beautify and " +
                        "modularize my projects. I have a strong preference for React.js, but I have " +
                        "also used Vue.js and Next.js."
                    }
                    link={"#project-section"}
                />
                <TechnologyCard
                    icon={<FaDatabase className='icon'/>}
                    header={"Back-End"}
                    description={
                        "Due to being primarily Back-end based, I can utilize multiple technologies " +
                        "such as MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker. "
                    }
                    link={"#project-section"}
                />
                <TechnologyCard
                    icon={<FaFigma className='icon'/>}
                    header={"UI/UX"}
                    description={
                        "I have achieved success in the UI/UX field using schematic tools such as Figma."
                    }
                    link={"https://www.figma.com/"}
                />
                
            </div> 
            <SectionDivider/>
        </div>
    )
}
