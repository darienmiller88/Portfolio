import React from 'react'
import "./Projects.css"
import { ProjectCardLeft, ProjectCardRight} from "../ProjectCard/ProjectCard"
import SectionDivider from "../SectionDivider/SectionDivider"
import { projects } from "../../Constants/Constants"
export default function Projects() {
    return (
        <div id="project-section" style={{color: "white"}}>
            {/* <span className="number">03.</span> */}
            <div className="project-header" style={{color: "white"}}>
                 Personal Projects! <hr width="75%"/>
            </div>
            {
                projects.map((project, i) => {
                    return i % 2 
                    ?
                    <ProjectCardLeft 
                        key={i}
                        picture={project.picture}
                        projectTitle={project.projectTitle}
                        description={project.description}
                        stack={project.stack}
                        source={project.source}
                    /> 
                    : 
                    <ProjectCardRight 
                        key={i}
                        picture={project.picture}
                        projectTitle={project.projectTitle}
                        description={project.description}
                        stack={project.stack}
                        source={project.source}
                    />
                })
            }

            <SectionDivider addMargin={true}/>
        </div>
    )
}
