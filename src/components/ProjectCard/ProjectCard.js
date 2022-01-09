import React from 'react'
import "./ProjectCard.css"

//Project picture on the left
export const ProjectCardLeft = (props) => {
    return (
        <div className="card-wrapper card-wrapper-left">
            <div className="card-picture">
                        
            </div>
            <div className="card-description">
            
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
                        
            </div>
        </div>
    )
}
