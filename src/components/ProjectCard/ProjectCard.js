import React from 'react'
import "./ProjectCard.css"
import { BsGithub } from 'react-icons/bs';

export const ProjectDescription = () => {

}

//Project picture on the left
export const ProjectCardLeft = (props) => {
    return (
        <div className="card-wrapper card-wrapper-left">
            <div className="card-picture">
                <img alt='project' src={props.picture}/>
            </div>
            <div className="card-description">
                <div className='project-header'>Example</div>
                <div className='project-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat                </div>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            
            </div> 
            <div className="card-picture">
                <img alt='project'/>
            </div>
        </div>
    )
}
