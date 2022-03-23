import React from 'react'
import "./MiniProjectCard.css"
import { FaCode } from "react-icons/fa"
import { BsGithub } from 'react-icons/bs';

export default function MiniProjectCard({ projectName, description, githubLink, stack}) {
    
    return (
        <div className='mini_project_card'>
            <div className="icon_wrapper">
                <div className="icon_wrapper_inner">
                    <FaCode className="mini_icon"/>
                </div>

                <a className="github_link_wrapper" href={githubLink}>
                    <BsGithub className="mini_icon" />
                </a>
            </div>

            <div className="mini_description_wrapper">
                <div className="mini_description_inner">
                    <div className="title">
                        {
                            projectName
                        }
                    </div>
                    <div className="mini_description">
                        {
                            description
                        }
                    </div>
                </div>
            </div>

            <div className="mini_stack">
                {
                    stack.map((elem, i) => {
                        return(
                            <div className="technology" key={i}>{elem}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
