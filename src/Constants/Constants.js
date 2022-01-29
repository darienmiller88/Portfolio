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
        description: "I have extensive experience in using Javascript frameworks to beautify and modularize my projects. I have a strong preference for React.js, but I have also used Vue.js and Next.js.",
        link: "#project-section"
    }, 
    {
        icon: <FaDatabase className='icon'/>,
        header: "Back-End",
        description: "Due to being primarily Back-end based, I can utilize multiple technologies such as MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker.",
        link: "#project-section"
    },
    {
        icon: <FaFigma className='icon'/>,
        header: "UI/UX",
        description: "I have achieved success in the UI/UX field using schematic tools such as Figma.",
        link: "https://www.figma.com/"
    }
]

export const work = [
    {
        business: "Administration for Child Services",
        position: "Summer Intern",
        description: [
            "Worked as Office Aide and trainee for the buildings’ Information Technology services",
            "Performed installations of printers, personal computers for many employees, and created " + 
            "office-wide Local Area Networks."
        ],
        yearStart: "July 2015",
        yearEnd: "August 2015"
    },
    {
        business: "Digital Girl, Inc.",
        position: "Computer Science Tutor",
        description: [
            "Worked with a small, private company to support its goal to encourage young students to pursue " +
            "computer science.",
            "Observed behavior for approximately twenty students and delivered insight to organization" +
            "director of each student’s strengths and weaknesses.",
            "Tailored teaching style to ensure that each student enjoyed the computer science curriculum."
        ],
        yearStart: "November 2015",
        yearEnd: "May 2016"
    },
    {
        business: "CUNY Tutor Corps",
        position: "Computer Science Tutor",
        description: [
            "Tutored twenty middle school and over a hundred high school students using Code.org and the " + 
            "Snap graphical programming language, focusing on introductory programming concepts such as " + 
            "if-else statements, loops, variables, and functions.",
            "Developed and implemented teaching methods that accommodated the learning styles of over " + 
            "seventy students across seven different classes, allowing for improved grades at the end " + 
            "of each marking period."
        ],
        yearStart: "February 2018",
        yearEnd: "June 2020"
    },
    {
        business: "Private Tutoring",
        position: "Computer Science Tutor",
        description: [
            "Appointed by several peers to tutor three Junior computer science majors concurrently. " +
            "Using primarily Java and C++, topics included Orientated programming and Data structures " + 
            "were taught using comprehensive lesson plans.",
            "By incorporating various methods of teaching, each student was able to pass both their midterm " + 
            "and final exam andvcomplete difficult assignments in a timely fashion."
        ],
        yearStart: "April 2018",
        yearEnd: "November 2021"
    },
    {
        business: "CUNY Tech Prep",    
        position: "Software Engineer Fellow",     
        description: [
            "Selected for a technical training program, as one of 183 students out of 400+ applicants",
            "Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry " + 
            "best practices for design, implementation, and deployment such as MVC, version control with " +
            "Git/GitHub, agile & Scrum with Trello and Slack, test driven development, and CI/CD"
        ],
        yearStart: "August 2020",
        yearEnd: "Present"
    }
]