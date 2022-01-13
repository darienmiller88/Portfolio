import React from 'react'
import { FaReact, FaDatabase, FaFigma } from 'react-icons/fa'


export default function TechnologyCard() {
    return (
        <div className="technology-card">
            <div className="icon-div">
                <FaDatabase className="icon"/>
            </div>
            <div className="technology-header">
                <h4>Back-End</h4>
            </div>    
            <div className="technology-description">
                <p>
                    Due to being primarily Back-end based, I can utilize multiple technologies
                    such as MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker.
                </p>
            </div>
            <div className="button-section">
                <button>Read more</button>
            </div>
        </div>
    )
}
