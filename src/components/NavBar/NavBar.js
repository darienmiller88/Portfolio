import React, { useEffect } from 'react'
import "./NavBar.css"
import pdf from "../../Documents/Formal_Resume.pdf"
import logo from "../../img/logo.png"
import SocialIcons from '../SocialIcons/SocialIcons'
import isCollapsed from '../IsCollapsed/IsCollapsed'

export default function NavBar() {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", () => {
            const el_autohide = document.querySelector('.autohide');
            
            // add padding-top to bady (if necessary)
            // const navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';

            if(el_autohide){
                var last_scroll_top = 0;
                window.addEventListener('scroll', function() {
                    let scroll_top = window.scrollY;
                    if(scroll_top < last_scroll_top) {
                        el_autohide.classList.remove('scrolled-down');
                        el_autohide.classList.add('scrolled-up');
                    } else {
                        el_autohide.classList.remove('scrolled-up');
                        el_autohide.classList.add('scrolled-down');
                    }
                    last_scroll_top = scroll_top;
                }); 
                // window.addEventListener
            }
        })

    }, [])
   

    const toggleCollapse = () => {        
        isCollapsed.isCollapsed = !isCollapsed.isCollapsed        
    }

    const PageLinks = () => {
        return (
            <ul className="navbar-nav ms-auto">        
                <li className="nav-item">
                    <a className="nav-link link"  href="#about-section"> 
                        <span className="number"> </span> About 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link"  href="#technologies-section"> 
                        <span className="number"></span> Technologies 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link"  href="#project_section"> 
                        <span className="number"> </span> Projects 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link"  href="#work_section">
                        <span className="number"> </span> Work 
                    </a>
                </li>  <li className="nav-item">
                    <a className="nav-link link"  href="#contact_section">
                        <span className="number"> </span> Contact 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="resume" href={pdf}  target="_blank" rel="noreferrer noopener"> Resume </a>
                </li>
            </ul>
        )
    }

    return (
        <nav className="autohide navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" id="logo" />
                </a>
                <button onClick={toggleCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-color" id="main_nav">
                    <SocialIcons/>
                    <PageLinks />
                </div>
            </div>
        </nav>
    )
}
