import React from 'react';
import "./ProjectCard.css"
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from "react-icons/fa"
import Carousel from '../Carousel/Carousel';

export default function ProjectCard({ project, projectNumber }) {        
    console.table("project number:", projectNumber)

    return (
        <div className={`project_card ${ projectNumber % 2 === 0 ? "project_card_picture_left" : "project_card_picture_right"}`}>
            <Carousel projectImages={project.pictures} projectNumber={projectNumber}/>
            <div className='project_description_div'>
                <div className='project_title_wrapper'>
                    <div className='project_title'>
                        <div className='project_title_text'>
                            { project.projectTitle }
                        </div>
                    </div>

                    <div className='project_links_wrapper'>
                        <a href={ project.githubLink } target="_blank" rel="noreferrer noopener">
                            <BsGithub className='project_link'/>
                        </a>
                        <a href={ project.projectLink } target="_blank" rel="noreferrer noopener">
                            <FaExternalLinkAlt className='project_link' />
                        </a>
                    </div>
                </div>
                
                <div className='project_description'>
                    {
                        project.description
                    }    
                </div> 
                    
                <div className='tech_stack_wrapper'>
                   <div className='tech_stack'>
                        {
                            project.stack.map((techonology, i) => {
                                return <div className='technology' key={i}> {techonology} </div>
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>
    );
}
