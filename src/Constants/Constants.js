import pic1 from "../img/project1.PNG"
import pic2 from "../img/project2.png"
import pic3 from "../img/project3.png"
import pic4 from "../img/project4.PNG"
import { FaReact, FaDatabase, FaFigma } from 'react-icons/fa'

export const projects = [
    {
        picture: pic1,
        projectTitle: "GameOn",
        description: "React web application in a team of 3, allowing users of similar gaming tastes to connect with each other.",
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
        source: "https://github.com/Land-Sharks/GameOn"
    },
    {
        picture: pic2,
        projectTitle: "Messenger",
        description: "Messenger application built using HTML, CSS, Javascript, and Go.",
        stack: ["HTML", "CSS", "Javascript", "Go", "Gorm"],
        source: "https://github.com/darienmiller88/Golang-Messenger"
    },
    {
        picture: pic3,
        projectTitle: "Task Scheduler",
        description: "Task scheduler built for a client that allows users to set different types of reminders.",
        stack: ["React.js", "Go", "MongoDB", "Netlify"],
        source: "https://github.com/darienmiller88/Task-Scheduler"
    },
    {
        picture: pic4,
        projectTitle: "Twidder",
        description: "Full stack Twitter clone built using React and Go.",
        stack: ["React.js", "Go", "Gorm", "PostgreSQL", "Netlify"],
        source: "https://github.com/darienmiller88/Better-Twitter-Clone"
    }
]

export const technologies = [
    {
        icon: <FaReact className='icon'/>,
        header: "Front-End",
        description: "I have extensive experience in using Javascript frameworks to beautify and modularize my projects. I have a strong preference for React.js, but I have also used Vue.js and Next.js."
    }, 
    {
        icon: <FaDatabase className='icon'/>,
        header: "Back-End",
        description: "Due to being primarily Back-end based, I can utilize multiple technologies such as MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker."
    },
    {
        icon: <FaFigma className='icon'/>,
        header: "UI/UX",
        description: "I have achieved success in the UI/UX field using schematic tools such as Figma."
    }
]