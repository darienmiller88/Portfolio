import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from "../../components/Footer/Footer"
import { BsEmojiFrown } from 'react-icons/bs';
import "./NotFound.css"

export default function NotFound() {
    return (
        <div id="not_found_section">
            <NavBar />
            <BsEmojiFrown className="frown" />
            <div className="not_found_error_code">
                404
            </div>
            <div className="not_found">
                Page not found
            </div>
            <div className="not_found_description">
                The page you are looking for sadly doesn't exist. 
            </div>
            <br/>
            <a href="/">
                Home
            </a>
            <Footer isFixed={true}/>
        </div>
    )
}
