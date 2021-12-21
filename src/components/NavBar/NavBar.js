import React, { useEffect } from 'react'
import "./NavBar.css"
import pdf from "../../Documents/resume.pdf"
import logo from "../../img/logo2.png"
import $ from "jquery"
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';


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

        const nav = $('.navbar-collapse')
        console.log("nav:", nav);
    }, [])

    $('.navbar-collapse').on('show.bs.collapse', function() {
        console.log("on showing");
    });
    $('.navbar-collapse').on('shown.bs.collapse', function() {
        console.log("already shown");
    });
    $('#main_nav').on('hide.bs.collapse', function() {
        console.log('on collapsing')
    });
    $('#main_nav').on('hidden.bs.collapse', function() {
        console.log('collapsed')
    });

    const PageLinks = () => {
        return (
            <ul className="navbar-nav ms-auto">        
                <li className="nav-item">
                    <a className="nav-link link"  href="#about"> 
                        <span className="number">01. </span> About 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link"  href="#projects"> 
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
        )
    }

    const SocialIcons = () => {
        return(
            <ul className="navbar-nav ">
                <li className="nav-item active">
                    <a className="nav-link" href="https://github.com/darienmiller88"> <BsGithub className="social-icon"/></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="https://www.instagram.com/the_hooded_one97/?hl=en"> <BsInstagram className="social-icon"/></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="https://www.linkedin.com/in/darien-miller"> <BsLinkedin className="social-icon"/></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="mailto:darienmiller88@yahoo.com"> <BsEnvelope className="social-icon" /></a>
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-color" id="main_nav">
                    <SocialIcons />
                    <PageLinks />
                </div>
            </div>
        </nav>
    )
}
