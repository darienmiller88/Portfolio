import twidder1 from "../img/twidder1.PNG"

import gameon1 from "../img/gameon1.PNG"
import gameon2 from "../img/gameon2.PNG"
import gameon3 from "../img/gameon3.PNG"
import gameon4 from "../img/gameon4.png"
import gameon5 from "../img/gameon5.PNG"

import taskscheduler1 from "../img/taskscheduler.png"
import taskscheduler2 from "../img/taskscheduler2.png"
import taskscheduler3 from "../img/taskscheduler3.png"

import messenger1 from "../img/messenger1.png"
import messenger2 from "../img/messenger2.png"
import messenger3 from "../img/messenger3.png"
import messenger4 from "../img/messenger4.png"
import messenger5 from "../img/messenger5.png"

import { FaReact, FaDatabase, FaFigma } from 'react-icons/fa'

export const projects = [
    {
        pictures: [gameon1, gameon2, gameon3, gameon4, gameon5],
        projectTitle: "GameOn",
        description: "React web application in a team of 3, allowing users of similar gaming tastes to connect with each other.",
        stack: ["React", "Node", "Express", "PostgreSQL"],
        githubLink: "https://github.com/Land-Sharks/GameOn",
        projectLink: ""
    },
    {
        pictures: [messenger1, messenger2, messenger3, messenger4, messenger5],
        projectTitle: "Messenger",
        description: "Messenger application built using HTML, CSS, Javascript, and Go.",
        stack: ["HTML", "CSS", "Javascript", "Go", "Gorm"],
        githubLink: "https://github.com/darienmiller88/Golang-Messenger",
        projectLink: ""
    },
    {
        pictures: [taskscheduler1, taskscheduler2, taskscheduler3],
        projectTitle: "Task Scheduler",
        description: "Task scheduler built for a client that allows users to set different types of reminders.",
        stack: ["React.js", "Go", "MongoDB", "Netlify"],
        githubLink: "https://github.com/darienmiller88/Task-Scheduler",
        projectLink: "https://thetaskscheduler.netlify.app/"
    },
    {
        pictures: [twidder1],
        projectTitle: "Twidder",
        description: "Full stack Twitter clone built using React and Go.",
        stack: ["React", "Go", "Gorm", "PostgreSQL", "Netlify"],
        githubLink: "https://github.com/darienmiller88/Better-Twitter-Clone",
        projectLink: ""

    }
]

export const technologies = [
    {
        icon: <FaReact className='icon'/>,
        header: "Front-End",
        description: "I have extensive experience in using Javascript frameworks to beautify and " + 
        "modularize my projects. I have a strong preference for React.js, but I have also successfully " +
        "used Vue.js and Next.js.",
        link: "#project-section"
    }, 
    {
        icon: <FaDatabase className='icon'/>,
        header: "Back-End",
        description: "Due to being primarily Back-end based, I can utilize multiple technologies such as " +
        "MongoDB, PostgreSQL, Node.js, MySQL, Heroku, Netlify, and Docker, as well as low level languages " +
        "like C++.",
        link: "#project-section"
    },
    {
        icon: <FaFigma className='icon'/>,
        header: "UI/UX",
        description: "I have achieved success in the UI/UX field using schematic tools such as Figma to " + 
        "to design the front ends of several of my projects, including this website.",
        link: "https://www.figma.com/"
    }
]

export const work = [
    {
        business: "Administration for Child Services",
        position: "Summer Intern",
        description: [
            "Worked as Office Aide and trainee for the buildings’ Information Technology services.",
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
            "Worked with a grassroots company to support its goal to encourage young students to pursue " +
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

export const olderProjects = [
    {
        projectName: "Twidder",
        description: "A basic, full stack implementation of Twitter that allows users to post \"Tweeds\" to " +
        "a dashboard that is publicly availble to all users. ",
        stack: ["Go", "MongoDB", "HTML", "CSS", "Javascript"],
        githubLink: "https://github.com/darienmiller88/Twitter-clone"
    },
    {
        projectName: "NASA: A Picture of the Day",
        description: "Web Application to extract data from the NASA API and display them onto an interactive page",
        stack: ["Go", "Gin", "HTML", "CSS"],
        githubLink: "https://github.com/darienmiller88/NASA-API-Application" 
    },
    {
        projectName: "Dance Movement",
        description: "Guided a team through the process of building a full stack web application intended to " +
        "retrieve small videos from a databse depicting dance moves, and posting it on a dashboard.",
        stack: ["Node.js", "Express", "HTML", "CSS", "MySQL"],
        githubLink: "https://github.com/darienmiller88/danceMovement" 
    },
    {
        projectName: "Pong",
        description: "A complete implementation of Pong using my own game engine, which comes completed with " +
        "menus, a cpu demo, and 1 and 2 player modes.",
        stack: ["C++", "SFML", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/Pong-Online" 
    },
    {
        projectName: "SFML Game Engine",
        description: "A collection of classes, functions, and helpful utilities meant to aid in c++ game " + 
        "development, which includes Animations, A Game State Manager, GUI elements, expressions, and a resource " +
        "manager.",
        stack: ["C++", "SFML", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/SFML-Game-engine-framework-thingy" 
    },
    {
        projectName: "Frogger",
        description: "An attempt to remake the classic game frogger. ",
        stack: ["C++", "SFML", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/Twitter-clone" 
    },
    {
        projectName: "C++ Data Structures",
        description: "A collection of C++ implementations of the STL, which includes the Hashmap, Tree Map, " +
        "LinkedList, Vector, Priority Queue, etc.",
        stack: ["C++", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/Twitter-clone" 
    },
    {
        projectName: "Sorting Algorithms Visualized",
        description: "Program to depict multiple sorting algorithms in real time.This project will use a " +
        "visual representation using the c++ graphics library SFML to show conceptually, what each sorting " + 
        "algorthim looks like at every pass.",
        stack: ["C++", "SFML", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/Sorting-Algortihms-Visualized" 
    },
    {
        projectName: "Java Snake",
        description: "Java swing implementation of the snake game.",
        stack: ["Java", "Swing"],
        githubLink: "https://github.com/darienmiller88/Twitter-clone" 
    },
    {
        projectName: "Flappy Bird",
        description: "Relatively faithful recreation of the (in)famous mobile phone game Flappy Bird.",
        stack: ["Java", "Swing"],
        githubLink: "https://github.com/darienmiller88/Flappy-Bird" 
    },
    {
        projectName: "Snake",
        description: "Console based implementation of the popular snake game in raw C++.",
        stack: ["C++"],
        githubLink: "https://github.com/darienmiller88/Snake" 
    },
]