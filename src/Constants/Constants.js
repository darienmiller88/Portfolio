import pic1 from "../img/project1.PNG"
import pic2 from "../img/project2.png"
import pic3 from "../img/project3.png"
import pic4 from "../img/project4.PNG"

export const projects = [
    {
        picture: pic1,
        projectTitle: "GameOn",
        description: "React web application in a team of 3, allowing users of similar gaming tastes to connect with each other",
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
        source: "https://github.com/Land-Sharks/GameOn"
    },
    {
        picture: pic2,
        projectTitle: "Messenger",
        description: "Messenger application built using HTML, CSS, Javascript, and Go.",
        stack: ["HTML", "CSS", "Javascript", "Go", "Gin", "Gorm"],
        source: "https://github.com/darienmiller88/Golang-Messenger"
    },
    {
        picture: pic3,
        projectTitle: "Task Scheduler",
        description: "Task scheduler built for a client that allows users to set different types of reminders.",
        stack: ["React.js", "Go", "Gin", "MongoDB", "Netlify"],
        source: "https://github.com/darienmiller88/Task-Scheduler"
    },
    {
        picture: pic4,
        projectTitle: "Twidder",
        description: "Full stack Twitter clone built using React and Go",
        stack: ["React.js", "Go", "Gin", "Gorm", "PostgreSQL", "Netlify"],
        source: "https://github.com/darienmiller88/Better-Twitter-Clone"
    }
]

export const technologyConstants = {
    reactIcon: "reactIcon",
    figmaIcon: "figmaIcon",
    databaseIcon: "databaseIcon",
    
}