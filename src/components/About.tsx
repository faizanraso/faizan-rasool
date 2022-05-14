import React from "react";
import '../styles/About.css'
import Fade from 'react-reveal/Fade';
import profilepic from "../profile-pic.jpeg"; 

function About(){
    return(
        <Fade bottom>
            <div className="about-section">
                <div className="about-section-div">
                    <h3 className="dark-blue-font">About Me</h3> 
                    <div className="about-section-text">
                        <p>
                            I'm Faizan Rasool, an Electrical Engineering Student at McMaster University (Hamilton, ON). I currently work over at 
                            Hydro One (Mississauaga, ON) as a AMI Network Analyst (Co-op). During my co-op I have worked on a variety of projects in which
                            I have designed and programmed scripts/tools which improve task efficency by upto 85%. Upon completing my work term,
                            I intend on gaining more experience, by completing another internship. I have also gained experience through several 
                            personal projects, created with technologies including:
                        </p>
                        <ul>
                                <li>JavaScript ES6+</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>Matlab</li>
                                <li>HTML + CSS</li>
                        </ul>
                    </div>
                    <div className="profile-pic-div">
                        <img className='profilepic' src={profilepic} alt="profilepic" height={250} />
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default About;