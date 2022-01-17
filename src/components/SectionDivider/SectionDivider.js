import React from 'react'
import "./SectionDivider.css"

export default function SectionDivider(props) {
    console.log("margin:", props.addMargin);
    return (
        <div className={`divider ${props.addMargin ? "margin": ""}`}>
        </div>
    )
}
