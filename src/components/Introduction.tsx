import React from "react";
import Fade from 'react-reveal/Fade';
import '../styles/Introduction.css'


function Introduction(){


    return(
        <div className="introduction-section">
                <div className="intro-section-div">
                    <Fade bottom>
                        <h1 className="blue-grey-font">Hi, I'm Faizan</h1>
                        <h2 className="dark-blue-font">I engineer sometimes.</h2>
                        <div className="introduction-section-intro">
                            <p> 
                                I'm a electrical engineering student with a passion for all things tech. Currently, I work at Hydro One as a 
                                AMI Network Analyst (Co-op). Upon finishing my work term, I intend on continuing to gain work experience through
                                another internship/co-op.
                            </p>
                        </div>
                        <a href="mailto:faizanraso@outlook.com"><h4 className="contact-button">Get In Touch</h4></a>
                    </Fade>
                </div>
        </div>
    )
}


export default Introduction;