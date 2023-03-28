import React from 'react'
import "./Technologies.css"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Horizontal from "../../components/Horizontal/Horizontal"
import { technologies } from "../../Constants/Constants"

export default function Technologies() {
    const Technology = ({ technologyImage, technologyName}) => {
        return (
            <div className='technology-wrapper'>
                <div className='technology'>
                    <img src={technologyImage} alt="tech"/>
                </div>
                <div className='technology-name'>{technologyName}</div>
            </div>
        )
    }

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
                        return <Technology technologyImage={technology.image} technologyName={technology.technologyName } key={i}/>
                    })
                }
            </div> 
            <SectionDivider addMargin={true}/>
        </div>
    )
}
