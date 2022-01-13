import React from 'react'
import "./TechnologyCard.css"
import { FaReact, FaDatabase, FaFigma } from 'react-icons/fa'
import { technologyConstants } from "../Constants/Constants"


export default function TechnologyCard(props) {
    return (
        <div className="technology-card">
            <div className="icon-div">
                {
                   props.icon
                }
            </div>
            <div className="technology-header">
                <h3>{props.header}</h3>
            </div>    
            <div className="technology-description">
                <p>
                    {props.description}
                </p>
            </div>
            <div className="button-section">
                <a href={props.link}>Read more</a>
            </div>
        </div>
    )
}
