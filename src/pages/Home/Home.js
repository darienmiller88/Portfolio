import React, { useEffect } from 'react'
import "./Home.css"
import "../../components/Scrollbar/Scrollbar.css"
import About from "../../components/About/About"
import Hero from '../../components/Hero/Hero'
import Projects from "../../components/Projects/Projects"
import Work from '../../components/Work/Work'
import Technologies from "../../components/Technologies/Technologies"
import Footer from "../../components/Footer/Footer"
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {
    useEffect(() => {
        document.title = "Darien Miller"
    }, [])

    return (
        <div>
            <NavBar/>
            <Hero/>
            <About/>            
            <Technologies/>
            <Projects/>
            <Work/>
            <Footer/>
        </div>
    )
}
