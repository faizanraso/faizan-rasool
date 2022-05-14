import React from 'react';
import '../styles/Experiences.css'
import Fade from 'react-reveal/Fade';

const jobs = {
    HydroOne: {
        title: "AMI Network Analyst (Co-op) @ Hydro One",
        duration: "May 2021 - Present",
        description: [ 
            "• Quality tested Database code systematically to find and resolve problems/bugs (VBA).",
            "• Designed and programmed tools which reduce the amount of time taken to complete weekly tasks/reports by up to 85% using VBA",
            "• Assisting in the development/revision of processes, tools, and procedures documents, as required"
        ]
    },
    Paper: {
        title: "STEM Tutor @ Paper",
        duration: "Sep 2021 - Present",
        description: [ 
            "• Managing tutoring sessions with students from K-12 (simultaneously) for mathematics and programming",
            "• Create an engaging learning environment and enhance student confidence and interest in learning"
        ]
    },
    McMaster: {
        title: "Undergraduate Teaching Assistant @ McMaster University",
        duration: "Jan 2021 - Apr 2021",
        description: [ 
            "• Overseeing laboratories for the first-year engineering course, ENG 1P13 (Integrated Cornerstone Design Projects in Engineering)",
            "• Assisting instructors in the evaluation of course assignments and development of feedback"
        ]
    }
}

function Experiences(){

    return(
        <Fade bottom>
            <div className='experiences-div'>
                <h3 className='dark-blue-font'>Experiences</h3>

                <div className='job-experience-card'>
                    <h4 className='job-card-title'>{jobs.HydroOne.title}</h4>
                    <h4 className='job-card-date'>{jobs.HydroOne.duration}</h4>
                    {jobs.HydroOne.description.map((desc)=>{
                        return <p className='job-card-desc'>{desc}</p>
                    })}
                </div>  

                <div className='job-experience-card'>
                    <h4 className='job-card-title'>{jobs.Paper.title}</h4>
                    <h4 className='job-card-date'>{jobs.Paper.duration}</h4>
                    {jobs.Paper.description.map((desc)=>{
                        return <p className='job-card-desc'>{desc}</p>
                    })}
                </div>  

                <div className='job-experience-card'>
                    <h4 className='job-card-title'>{jobs.McMaster.title}</h4>
                    <h4 className='job-card-date'>{jobs.McMaster.duration}</h4>
                    {jobs.McMaster.description.map((desc)=>{
                        return <p className='job-card-desc'>{desc}</p>
                    })}
                </div>  

            </div>
        </Fade>
    )
}

export default Experiences;