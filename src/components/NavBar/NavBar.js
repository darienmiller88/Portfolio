import React, { useEffect } from 'react'
import "./NavBar.css"
import pdf from "../../Documents/resume.pdf"
import logo from "../../img/logo1.PNG"

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

    return (
        <nav className="autohide navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" width="40" height="40" id="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-color" id="main_nav">
                    <ul className="navbar-nav ms-auto" style={{color: "white"}}>
                        <li className="nav-item">
                            <a className="nav-link link"  href="#about"> 
                                <span className="number">01. </span> About 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link"  href="#experience"> 
                                <span className="number">02. </span> Projects 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link"  href="#work">
                                <span className="number">03. </span> Work 
                            </a>
                        </li>  <li className="nav-item">
                            <a className="nav-link link"  href="#contact">
                                <span className="number">04. </span> Contact 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="resume" href={pdf}> Resume </a>
                        </li>
                    </ul>
                </div> 
            </div> 
        </nav>
    )
}
