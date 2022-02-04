import React from 'react'
import "./Work.css"
import WorkGroup from "../WorkGroup/WorkGroup"
import SectionDivider from "../SectionDivider/SectionDivider"
import Horizontal from '../Horizontal/Horizontal'

export default function Work() {
    return (
        <div id="work-section">
            <div className="work-header" style={{color: "white"}}>
                Work Timeline  
            </div>                
            <Horizontal />
            <WorkGroup />
            <SectionDivider />
        </div>
    )
}
