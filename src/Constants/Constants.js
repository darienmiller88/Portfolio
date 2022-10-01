import twidder1 from "../img/twidder/twidder1.PNG"

import gameon1 from "../img/gameon/gameon1.PNG"
import gameon2 from "../img/gameon/gameon2.PNG"
import gameon3 from "../img/gameon/gameon3.PNG"
import gameon4 from "../img/gameon/gameon4.png"
import gameon5 from "../img/gameon/gameon5.PNG"

import taskscheduler1 from "../img/taskscheduler/taskscheduler.png"
import taskscheduler2 from "../img/taskscheduler/taskscheduler2.png"
import taskscheduler3 from "../img/taskscheduler/taskscheduler3.png"

import messenger1 from "../img/messenger/messenger1.png"
import messenger2 from "../img/messenger/messenger2.png"
import messenger3 from "../img/messenger/messenger3.png"
import messenger4 from "../img/messenger/messenger4.png"
import messenger5 from "../img/messenger/messenger5.png"

import cplusplus from "../img/techlogos/c++.png"
import css from "../img/techlogos/css.png"
import docker from "../img/techlogos/docker.png"
import git from "../img/techlogos/git.png"
import go from "../img/techlogos/go.png"
import heroku from "../img/techlogos/heroku.png"
import html from "../img/techlogos/html2.png"
import javascript from "../img/techlogos/javascript.png"
import mongodb from "../img/techlogos/mongodb.png"
import mysql from "../img/techlogos/mysql.png"
import netlify from "../img/techlogos/netlify.png"
import nodejs from "../img/techlogos/node.png"
import postgres from "../img/techlogos/postgres.png"
import react from "../img/techlogos/react.png"
import redux from "../img/techlogos/redux.png"
import sass from "../img/techlogos/sass.png"
import sql from "../img/techlogos/sql.png"
import vue from "../img/techlogos/vue.png"

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
        technologyName: "C++",
        image: cplusplus   
    },
    {
        technologyName: "Go",
        image: go    
    },
    {
        technologyName: "HTML5",
        image: html    
    },
    {
        technologyName: "CSS3",
        image: css    
    },
    {
        technologyName: "Javascript",
        image: javascript    
    },
    {
        technologyName: "Node.js",
        image: nodejs    
    }, 
    {
        technologyName: "Docker",
        image: docker    
    },
    {
        technologyName: "Git",
        image: git    
    },
    {
        technologyName: "Heroku",
        image: heroku    
    },
    {
        technologyName: "MongoDB",
        image: mongodb    
    },
    {
        technologyName: "MySQL",
        image: mysql    
    }, 
    {
        technologyName: "PostgreSQL",
        image: postgres    
    }, 
    {
        technologyName: "Netlify",
        image: netlify    
    },
    {
        technologyName: "React",
        image: react
    },
    {
        technologyName: "Redux",
        image: redux
    },
    {
        technologyName: "Sass",
        image: sass
    },
    {
        technologyName: "SQL",
        image: sql
    },
    {
        technologyName: "Vue",
        image: vue
    },
]

export const work = [
    {
        business: "CUNY Tech Prep",    
        position: "Software Engineer Fellow",     
        description: [
            "Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry " + 
            "best practices for design, implementation, and deployment such as MVC, version control with " +
            "Git/GitHub, agile & Scrum with Trello and Slack, test driven development, and CI/CD",
            "Assisted future cohorts in establishing their SQL relations and in deploying their databases to Heroku.",
            "Selected for a technical training program, as one of 183 students out of 400+ applicants",
        ],
        yearStart: "August 2020",
        yearEnd: "May 2021"
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
        description: "Supervised a team through the process of building a full stack web application intended to " +
        "retrieve videos from a database depicting dance moves, and posting it on a dashboard.",
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