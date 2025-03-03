// import twidder1 from "../img/twidder/twidder1.PNG"

import pong          from "../img/Chip-8/pong.png"
import fishie        from "../img/Chip-8/fishie.png"
import testopcode    from "../img/Chip-8/testopcode.png"
import spaceinvaders from "../img/Chip-8/space invaders.png"

import messenger1 from "../img/messengerv2/home.png"
import messenger2 from "../img/messengerv2/signinform.png"
import messenger3 from "../img/messengerv2/deletemessageform.png"
import messenger4 from "../img/messengerv2/addnewchatform.png"

import chooseEquality1 from "../img/ChoosEquality/one.png"
import chooseEquality2 from "../img/ChoosEquality/two.png"
import chooseEquality3 from "../img/ChoosEquality/three.png"

import MDBank1 from "../img/MDBank/title.png"
import MDBank2 from "../img/MDBank/create-account.png"
import MDBank3 from "../img/MDBank/dashboard.png"
import MDBank4 from "../img/MDBank/transfer-money.png"
import MDBank5 from "../img/MDBank/transfers.png"

import AdaptScoreboard1 from "../img/AdaptScoreboard/adaptcoreboard1.png"
import AdaptScoreboard2 from "../img/AdaptScoreboard/adaptcoreboard2.png"
import AdaptScoreboard3 from "../img/AdaptScoreboard/adaptcoreboard3.png"
import AdaptScoreboard4 from "../img/AdaptScoreboard/adaptcoreboard4.png"

import cplusplus from "../img/techlogos/c++.png"
import csharp from "../img/techlogos/csharp.png"
import python from "../img/techlogos/python.png"
import css from "../img/techlogos/css.png"
import svelte from "../img/techlogos/svelte.png"
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

export const projects = [
    {
        pictures: [AdaptScoreboard1, AdaptScoreboard2, AdaptScoreboard3, AdaptScoreboard4],
        projectTitle: "Adapt Scoreboard",
        description: "Jeopardy scorekeeper application built using Vue3, Go and MongoDB. It allows " +
        "users to add players to ADAPT locations, create score cards for each player, and " + 
        "create Teams based on each location for team games.",
        stack: ["Vue3", "Go", "MongoDB", "Netlify"],
        githubLink: "https://github.com/darienmiller88/DigitalScoreBoard",
        projectLink: "https://adaptscoreboard.netlify.app/"
    },
    {
        pictures: [messenger1, messenger2, messenger3, messenger4],
        projectTitle: "Messenger",
        description: "Messenger application built using Svelte, Go and PostgreSQL. Messenger allows " +
        "users to chat together in a public chat, as well as create group chats where they can message other " + 
        "users added to those chats. Users can even see message history!",
        stack: ["Svelte", "Go", "PostgreSQL", "Netlify", "Pusher"],
        githubLink: "https://github.com/darienmiller88/MessengerV2",
        projectLink: "https://messengerv2.netlify.app/"
    },
    {
        pictures: [pong, fishie, spaceinvaders, testopcode],
        projectTitle: "Chip-8 Emulator",
        description: "C++ implementation of a Chip-8 interpreter using SFML to provide graphics and audio " +
        "capabilities. This emulator is capable of running a good number of Chip-8 games effectively, with controls " +
        "and framerate functioning as expected, and graphical capabilities near perfection.", 
        stack: ["C++", "SFML"],
        githubLink: "https://github.com/darienmiller88/Chip8-Emulator",
        projectLink: ""
    },
    {
        pictures: [MDBank1, MDBank2, MDBank3, MDBank4, MDBank5],
        projectTitle: "MDBank",
        description: "Built a React and Go banking application inspired by Citibank that was successfully " +
        "containerized using Docker, and deployed onto Heroku and Netlify.",
        stack: ["React", "Go", "MongoDB", "Netlify"],
        githubLink: "https://github.com/darienmiller88/Better-Bank-Account",
        projectLink: "https://millerbank.netlify.app/"
    },
    {
        pictures: [chooseEquality1, chooseEquality2, chooseEquality3],
        projectTitle: "ChoosEquality",
        description: "Coordinated a team of 4 as Scrum Master to rapidly develop in 2 days a web application " +
        "using SolidJS, Go, and PostgreSQL to aid in the integration of formerly incarcerated persons back " +
        "into society",
        stack: ["SolidJS", "Go", "Gorm", "PostgreSQL", "Netlify"],
        githubLink: "https://github.com/darienmiller88/Girls-in-Tech-Hackathon",
        projectLink: "https://girlsintech.netlify.app/"
    },
    // {
    //     pictures: [twidder1],
    //     projectTitle: "Twidder",
    //     description: "Full stack Twitter clone built using React and Go.",
    //     stack: ["React", "Go", "Gorm", "PostgreSQL", "Netlify"],
    //     githubLink: "https://github.com/darienmiller88/Better-Twitter-Clone",
    //     projectLink: ""
    // }
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
        technologyName: "React",
        image: react
    },
    {
        technologyName: "Svelte",
        image: svelte
    },
    {
        technologyName: "Javascript",
        image: javascript    
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
        technologyName: "SQL",
        image: sql
    },
    {
        technologyName: "PostgreSQL",
        image: postgres    
    }, 
    {
        technologyName: "MongoDB",
        image: mongodb    
    },
    {
        technologyName: "Sass",
        image: sass
    },
    {
        technologyName: "C#",
        image: csharp
    },
    {
        technologyName: "Python",
        image: python
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
        technologyName: "MySQL",
        image: mysql    
    }, 
    {
        technologyName: "Netlify",
        image: netlify    
    },
    {
        technologyName: "Redux",
        image: redux
    },
]

export const work = [
    {
        business: "ADAPT Community Network",    
        position: "Computer Specialist",     
        description: [
            "Directs classes for 30+ participants on computing and coding concepts, increasing computer literacy " +
            "by 75% as measured through post-class assessments tailored to individuals with diverse physical and " + 
            "learning differences.",
            "Resolves 90% of technical issues during workshops, improving the overall accessibility and learning " +
            "experience by providing hands-on IT support for both hardware and software challenges.",
            "Developed and launched a VueJS & Go web app for score tracking, increasing gameplay efficiency " +
            "by 200% and streamlining tournament organization."
        ],
        yearStart: "July 2024",
        yearEnd: "Present"
    },
    {
        business: "Platinum Edge Tutoring",    
        position: "Computer Science Tutor",     
        description: [
            "Spearheaded the resolution of tech-related problems for 200 total teachers and students a week " +
            "regarding software, hardware, mobile devices, and internet connectivity. ",
            "Tutored and directed class discussion for middle and high school students at 5 different schools " +
            "across NYC in Algebra, History and Computer Science, serving as the lead instructor.",
            "Coached students in Math and English, aiding in subject mastery and with test-taking skills, " +
            "resulting in massively improved learning comprehension, and mock-test score improvements by up " +
            "to 12% for each grade.",
            "Supervised students during physical activity, reducing injuries by up to 28%, and stimulated their " +
            "imagination by introducing several activities such as Soccer, Rugby relays, and obstacle courses."
        ],
        yearStart: "March 2023",
        yearEnd: "Present"
    },
    {
        business: "CUNY Tech Prep",    
        position: "Software Engineer Fellow",     
        description: [
            "Coordinated with staff and service providers to ensure seamless deployment of PC equipment and workstations.",
            "Supervised future cohorts in planning and deploying their project databases to cloud services such as Heroku ",
            "Participated in professional development program to learn in-demand technologies like React, Node + Express " + 
            "and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC " + 
            ", version control with Git/GitHub, agile & Scrum with Trello and Slack, test driven development, and CI/CD.",
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
            "and final exam and complete difficult assignments in a timely fashion."
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
        projectName: "Dance Movements",
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
        githubLink: "https://github.com/darienmiller88/Frogger" 
    },
    {
        projectName: "C++ Data Structures",
        description: "A collection of C++ implementations of the STL, which includes the Hashmap, Tree Map, " +
        "LinkedList, Vector, Priority Queue, etc.",
        stack: ["C++", "Visual Studio"],
        githubLink: "https://github.com/darienmiller88/Data-Structures-In-C-plus-plus" 
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
        githubLink: "https://github.com/darienmiller88/Java-Swing-Snake" 
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