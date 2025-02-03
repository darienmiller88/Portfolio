import React, { useRef, useState } from 'react';
import { work } from "../../Constants/Constants"
import "./WorkGroup.css"

export default function WorkGroup() {
    const [currentJob, setCurrentJob] = useState(work[0].business)   
    const [currentJobIndex, setCurrentJobIndex] = useState(0) 
    const activeClass = "work-title-active"
    const jobsRef = useRef(null)

    const jobOnclick = (e) => {
        const jobs = jobsRef.current.querySelectorAll(".work-title")        

        jobs.forEach((job, i) => {
            //Add the active class to the job the user clicked on.
            if(job.textContent === e.target.textContent){
                job.classList.add(activeClass)
                setCurrentJobIndex(i)
            }
            //if this job is the same as the current one, remove the active class.
            else if(job.textContent === currentJob){
                job.classList.remove(activeClass)
            }
        })        
        
        setCurrentJob(e.target.textContent)
    }

    return (
        <div className='work-group'>
            <div className='work-titles' ref={jobsRef}>
                {
                    work.map((job, i) => {
                        //Set the first job to be the active class to highlight it.
                        return (
                            <div className={`work-title ${i === 0 ? activeClass : ''}`} onClick={jobOnclick} key={i}>
                                { job.business }
                            </div>
                        )
                    })
                }
            </div>
            <div className='work-description'>
                <div className='business-name'>
                    { work[currentJobIndex].business }  
                </div>
                <div className='year-start-end'>
                    { work[currentJobIndex].yearStart } - { work[currentJobIndex].yearEnd }
                </div>
                <div className='position'>
                    { work[currentJobIndex].position }  
                </div>
                <ul>
                    {
                        work[currentJobIndex].description.map((descriptor, i) => {
                            return(
                                <li key={i}>
                                    <span>
                                        { descriptor }
                                    </span>
                                </li>
                            )
                        })
                    }  
                </ul>
            </div>
        </div>
    )
}
