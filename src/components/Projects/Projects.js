import React from 'react'
import "./Projects.css"
import { ProjectCardLeft, ProjectCardRight} from "../ProjectCard/ProjectCard"
import SectionDivider from "../SectionDivider/SectionDivider"
import { projectCardContstants } from "../../Constants/Constants"
export default function Projects() {
    return (
        <div id="project-section" style={{color: "white"}}>
            <div className="project-header" style={{color: "white"}}>
                <span className="number">03.</span> Projects <hr width="75%"/>
            </div>
            {
                projectCardContstants.map((project, i) => {
                    return i % 2 
                    ?
                    <ProjectCardLeft 
                    key={i}
                    picture={project.picture}
                    projectTitle={project.projectTitle}
                    description={project.description}
                    /> 
                    : 
                    <ProjectCardRight 
                    key={i}
                    picture={project.picture}
                    projectTitle={project.projectTitle}
                    description={project.description}
                    />

                })
            }

            <SectionDivider/>
        </div>
    )
}
