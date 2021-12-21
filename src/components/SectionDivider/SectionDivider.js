import React from 'react'
import "./SectionDivider.css"

export default function SectionDivider(props) {
    return (
        <div className={`divider ${props.additionalClass}`}>
        </div>
    )
}
