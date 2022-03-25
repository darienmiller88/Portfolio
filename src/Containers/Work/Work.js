import React from 'react'
import "./Work.css"
import WorkGroup from "../../components/WorkGroup/WorkGroup"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Horizontal from '../../components/Horizontal/Horizontal'

export default function Work() {
    return (
        <div id="work_section">
            <div className="header">
                Work Timeline  
            </div>                
            <Horizontal />
            <WorkGroup />
            <SectionDivider />
        </div>
    )
}
