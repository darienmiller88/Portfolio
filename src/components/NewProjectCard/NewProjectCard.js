import React from 'react'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import styles from "./NewProjectCard.module.css"

const TechStack = ({stackName}) => {
    return(
        <div className={styles.stack}>{stackName}</div>
    )
}

export default function NewProjectCard({project, projectNumber}) {
    return (
        <div className={`${styles.card_wrapper} ${projectNumber % 2 !== 0 ? styles.picture_left : styles.picture_right}`}>
            <div className={styles.project_description_wrapper}>
                <div className={styles.project_name}>{project.projectTitle}</div>
                <div className={styles.project_description}>{project.description}</div>
                <div className={styles.tech_stack}>
                    {
                        project.stack.map((stack, i) => {
                            return <TechStack key={i} stackName={stack}/>
                        })
                    }
                </div>
                <div className={styles.button_group}>
                    <button className={styles.view_code}>
                        View Code! 
                        <BsGithub className={styles.icon}/>
                    </button>
                    <button className={styles.demo}>
                        Demo
                        <BsBoxArrowUpRight className={styles.icon}/>
                    </button>
                </div>
            </div>
            <div className={styles.project_image_wrapper}>
                <img src={project.pictures[0]} alt='project'/>
            </div>
        </div>
    )
}