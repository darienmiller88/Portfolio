import React, { useEffect } from 'react'
import "./Home.css"
import "../../components/Scrollbar/Scrollbar.css"
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {
    useEffect(() => {
        document.title = "Darien Miller"
    }, [])

    return (
        <div>
            <NavBar/>
            <div className="name my-margin">
                Darien Miller.
            </div>
            <div className="slogan my-margin">
                Aspiring Software Engineer.
            </div>             
            <br/>
            <p className="description my-margin">
                I'm a recent Computer Science graduate out of Brooklyn College <br/>
                seeking to further my education in Graduate school for Compputer Engineering.<br/>
                I specialize in fullstack development with a focus on backend development,<br/>
                and am currently seeking employment.
            </p>
            <br/>
            <a className="github-link my-margin" href="https://github.com/darienmiller88">
                Check out my projects!
            </a>
        </div>
    )
}
