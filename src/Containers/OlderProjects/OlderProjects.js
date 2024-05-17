import React from 'react'
import { olderProjects } from "../../Constants/Constants"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import MiniProjectCard from "../../components/MiniProjectCard/MiniProjectCard"
import "./OlderProjects.css"

export default function OlderProjects() {
    return (
        <>
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
        </>
    )
}
