import React from 'react'
import "./Technologies.css"
import { FaReact } from 'react-icons/fa'

export default function Technologies() {
    return (
        <div id="technologies-section">
            <div className="technologies-header" style={{color: "white"}}>
                <span className="number">02.</span> Technologies <hr width="75%"/>
            </div>

            {/* <div className="technologies">
                <div className="technology">
                    <FaReact/><br/>
                    <h5>Front End</h5>
                </div>
                <div className="technology">
                    <FaReact/><br/>
                    <h5>Back End</h5>
                </div>
                <div className="technology">
                    <FaReact/><br/>
                    <h5>UI/UX</h5>
                </div>
            </div> */}
        </div>
    )
}
