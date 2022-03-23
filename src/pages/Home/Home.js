import React, { useEffect } from 'react'
import "./Home.css"
import "../../components/Scrollbar/Scrollbar.css"
import About from "../../components/About/About"
import Hero from '../../Containers/Hero/Hero'
import Projects from "../../Containers/Projects/Projects"
import Work from '../../Containers/Work/Work'
import Technologies from "../../components/Technologies/Technologies"
import Contact from '../../components/Contact/Contact'
import Footer from "../../Containers/Footer/Footer"
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {
    useEffect(() => {
        document.title = "Darien Miller"
    }, [])

    return (
        <div>
            <NavBar />
            <Hero />
            <About />            
            <Technologies />            
            <Work />
            <Projects/>
            <Contact />
            <Footer />
        </div>
    )
}
