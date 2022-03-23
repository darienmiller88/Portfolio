import React from 'react'
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import "./Footer.css"

export default function Footer({isFixed}) {
    return (
        <div id="footer_section" className={`${isFixed ? "fixed" : ""}`}>
            <div className="socials">
                <a href="https://www.linkedin.com/in/darien-miller" className="social_icon_link">
                    <BsLinkedin className="social_link"/>
                </a>
                <a href="https://github.com/darienmiller88" className="social_icon_link">
                    <BsGithub className="social_link"/>
                </a>
                <a href="mailto:darienmiller88@yahoo.com" className="social_icon_link">
                    <BsEnvelope className="social_link"/>
                </a>
            </div>
            <br/>
            <div className='copyright'>
                Copyright © 2022 All Rights Reserved
            </div>
        </div>
    )
}
