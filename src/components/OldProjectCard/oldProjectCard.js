import React from 'react'
import "./ProjectCardPicLeft.css"
import "./ProjectCardPicRight.css"
import "./ProjectCard.css"

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
            <div className='stack'>Tech Stack</div>        
            <div className='project-technologies'>
                {
                    props.projectData.stack.map((technology, i) => {
                        return <div className='project-technology' key={i}>{technology}</div>
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
            <a className="card-picture" href={projectData.source}>
                <img alt='project' src={projectData.picture}/>
            </a>
            <div className="card-description">
                <ProjectDescription projectData={projectData}/>
            </div>
        </div>
    )
}

//Project picture on the right. THIS ONE IS THE ISSUE!!!
export const ProjectCardRight = (projectData) => {
    return (
        <div className="card-wrapper card-wrapper-right">
            <div className="card-description">
                <ProjectDescription projectData={projectData}/>
            </div> 
            <a className="card-picture" href={projectData.source}>
                <img alt='project' src={projectData.picture}/>
            </a>
        </div>
    )
}
