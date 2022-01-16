import React from 'react'
import "./ProjectCardPicLeft.css"
import "./ProjectCardPicRight.css"
import "./ProjectCard.css"

// import { BsGithub } from 'react-icons/bs';

export const ProjectDescription = (props) => {
    return(
        <>
            <div className='project-header'>
                <p>
                    {
                        props.projectData.projectTitle
                    }
                </p> 
                <div className="project-divider"></div>
            </div>
           
            <div className='project-description'>
                <p>
                    {
                        props.projectData.description
                    }
                </p>
            </div>                
            <div className='project-technologies'>
                {
                    props.projectData.stack.map(technology => {
                        return <div className='project-technology'>{technology}</div>
                    })
                }
            </div>
            <div className='project-link'>
                <a href={props.projectData.source}>
                    Source
                </a>
            </div>
        </>
    )
}

//Project picture on the left
export const ProjectCardLeft = (projectData) => {        
    return (
        <div className="card-wrapper card-wrapper-left">
            <div className="card-picture">
                <img alt='project' src={projectData.picture}/>
            </div>
            <div className="card-description">
                <ProjectDescription projectData={projectData}/>
            </div>
        </div>
    )
}

//Project picture on the right. THIS ONE IS THE ISSUE!!!
export const ProjectCardRight = (props) => {
    return (
        <div className="card-wrapper card-wrapper-right">
            <div className="card-description">
                <ProjectDescription projectData={props}/>
            </div> 
            <div className="card-picture">
                <img alt='project' src={props.picture}/>
            </div>
        </div>
    )
}
