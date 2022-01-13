import React from 'react'
import "./Projects.css"
import { ProjectCardLeft, ProjectCardRight} from "../ProjectCard/ProjectCard"
import SectionDivider from "../SectionDivider/SectionDivider"
import projects from "../Constants/Constants"

export default function Projects() {
    return (
        <div id="project-section" style={{color: "white"}}>
            <div className="project-header" style={{color: "white"}}>
                <span className="number">03.</span> Projects <hr width="75%"/>
            </div>
            <ProjectCardLeft/>
            <ProjectCardRight/>
            <ProjectCardLeft/>            
            <ProjectCardRight/>
            <SectionDivider/>
        </div>
    )
}
