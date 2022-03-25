import React from 'react'
import "./Projects.css"
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Horizontal from "../../components/Horizontal/Horizontal"
import MiniProjectCard from "../../components/MiniProjectCard/MiniProjectCard"
import { projects, olderProjects } from "../../Constants/Constants"

export default function Projects() {
    return (
        <div id="project_section">
            <div className="header">
                 Personal Projects! 
            </div>
            <Horizontal />
            {
                projects.map((project, i) => {
                    return <ProjectCard project={project} key={i} projectNumber={i} />
                })
            }

            <div className="older_projects_header">
                Check out my older projects! 👇
            </div>

            <div className="older_projects">
                {
                    olderProjects.map((elem, i) => {
                        return <MiniProjectCard 
                            key={i}
                            projectName={elem.projectName}
                            description={elem.description}
                            githubLink={elem.githubLink}
                            stack={elem.stack}
                        />
                    })
                }
            </div>

            <SectionDivider addMargin={true}/>
        </div>
    )
}
