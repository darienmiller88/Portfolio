import React from 'react'
// import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Horizontal from "../../components/Horizontal/Horizontal"
import NewProjectCard from '../../components/NewProjectCard/NewProjectCard'
import { projects } from "../../Constants/Constants"

export default function Projects() {
    return (
        <div id="project_section">
            <div className="header">
                 Personal Projects! 
            </div>
            <Horizontal />
            {
                projects.map((project, i) => {
                    return <NewProjectCard project={project} key={i} projectNumber={i} />
                })
            }

            <SectionDivider addMargin={true}/>
        </div>
    )
}
