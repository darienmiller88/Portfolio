import React from 'react'
import "./Hero.css"
import $ from "jquery"
import SectionDivider from '../SectionDivider/SectionDivider'

export default function Hero() {
    
$('#trigger').on('click', (e) => {
	e.preventDefault();
    console.log('trigering');
    
});

    const onClick = (e) => {
        e.preventDefault()
        console.log("hi");
    
    
        // do jQuery trigger "click". (WORK).
        $('.navbar-toggler').trigger('click');
    }
    
$('.navbar-collapse').on('show.bs.collapse', function() {
        console.log("on showing");
    });
    $('.navbar-collapse').on('shown.bs.collapse', function() {
        console.log("already shown");
    });
    return (
        <div>
            <div className="hi my-margin">Hello! My name is</div>
            {/* <button id="trigger" onClick={onClick}>Collapse/expand</button> */}
            <div className="name my-margin" >
                Darien Miller.
            </div>
            <div className="slogan my-margin">
                Rising Software Engineer.
            </div>             
            <br/>
            <p className="description my-margin">
                I'm a recent Computer Science graduate specializing in Full Stack 
                development with a focus on backend development. I am currently focusing on 
                building fast, responsive and secure web applications for my clients.
            </p>
            <br/>
            <a className="github-link my-margin" href="https://github.com/darienmiller88">
                Check out my projects!
            </a>
            <br/>
            <br/>
            <SectionDivider additionalClass={"my-margin"}/>
        </div>
    )
}
