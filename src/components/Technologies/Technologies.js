import React from 'react'
import "./Technologies.css"
import SectionDivider from "../SectionDivider/SectionDivider"
import TechnologyCard from "../TechnologyCard/TechnologyCard"
import { technologies } from "../../Constants/Constants"

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
                {
                    technologies.map((technology, i) => {
                        return <TechnologyCard
                            key={i}
                            icon={technology.icon}
                            header={technology.header}
                            description={technology.description}
                        />
                    })
                }
            </div> 
            <SectionDivider addMargin={true}/>
        </div>
    )
}
