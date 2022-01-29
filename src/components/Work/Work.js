import React from 'react'
import "./Work.css"
import WorkGroup from "../WorkGroup/WorkGroup"
import SectionDivider from "../SectionDivider/SectionDivider"

export default function Work() {
    return (
        <div id="work-section">
            <div className="work-header" style={{color: "white"}}>
                Check out my work history!  <hr width="75%"/>
            </div>
            <WorkGroup/>
            <SectionDivider addMargin={true}/>
        </div>
    )
}
