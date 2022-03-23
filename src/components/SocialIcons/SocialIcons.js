import React from 'react'
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import "./SocialIcons.css"

export default function SocialIcons() {
    return (
        <ul className="navbar-nav" id="my_nav">
            <li className="nav-item active">
                <a className="nav-link" href="https://github.com/darienmiller88" target="_blank" rel="noreferrer noopener"> <BsGithub className="social-icon"/></a>
            </li>
            {/* <li className="nav-item active">
                <a className="nav-link" href="https://www.instagram.com/the_hooded_one97/?hl=en"> <BsInstagram className="social-icon"/></a>
            </li> */}
            <li className="nav-item active">
                <a className="nav-link" href="https://www.linkedin.com/in/darien-miller" target="_blank" rel="noreferrer noopener"> <BsLinkedin className="social-icon"/></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="mailto:darienmiller88@yahoo.com"> <BsEnvelope className="social-icon" /></a>
            </li>
        </ul>
    )
}
