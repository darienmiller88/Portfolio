import React from 'react'
import "./Technologies.css"
import SectionDivider from "../SectionDivider/SectionDivider"
import TechnologyCard from "../TechnologyCard/TechnologyCard"
import Horizontal from '../Horizontal/Horizontal'
import { technologies } from "../../Constants/Constants"

export default function Technologies() {
    return (
        <div id="technologies-section">
            <div className="header">
                Technologies I've used
            </div>
            <Horizontal />
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
                            link={technology.link}
                        />
                    })
                }
            </div> 
            <SectionDivider addMargin={true}/>
        </div>
    )
}
