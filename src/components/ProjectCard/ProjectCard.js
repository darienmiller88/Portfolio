import React from 'react'
import "./ProjectCard.css"
import { BsGithub } from 'react-icons/bs';
import pic from "../../img/project1.PNG"

export const ProjectDescription = () => {

}

//Project picture on the left
export const ProjectCardLeft = (props) => {        
    console.log("img:", props.picture)

    return (
        <div className="card-wrapper card-wrapper-left">
            <div className="card-picture">
                <img alt='project' src={props.picture}/>
            </div>
            <div className="card-description">
                <div className='project-header'>
                    {props.projectTitle}
                </div>
                <div className='project-description'>
                    {props.description}
                </div>
                <div className='project-technologies'>React Golang PostGres</div>
                <div className='project-link'>
                    <a href='https://github.com/darienmiller88/Task-Scheduler'>
                        <BsGithub/>
                    </a>
                </div>
            </div>
        </div>
    )
}

//Project picture on the right. THIS ONE IS THE ISSUE!!!
export const ProjectCardRight = (props) => {
    return (
        <div className="card-wrapper card-wrapper-right">
            <div className="card-description">
                <div className='project-header'>
                    {props.projectTitle}
                </div>
                <div className='project-description'>
                    {props.description}
                </div>
                <div className='project-technologies'>React Golang PostGres</div>
                <div className='project-link'>
                    <a href='https://github.com/darienmiller88/Task-Scheduler'>
                        <BsGithub/>
                    </a>
                </div>
            </div> 
            <div className="card-picture">
                <img alt='project' src={props.picture}/>
            </div>
        </div>
    )
}
